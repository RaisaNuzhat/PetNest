
import { useEffect, useState } from "react";
import axios from "axios";
import DonationCard from "../components/DonationCard";
import { Helmet } from "react-helmet";
const DonationCampaigns = () => {
    const [sort, setSort] = useState('desce')
    const [donations, setDonations] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/alldonations?sort=${sort}`
            )
            setDonations(data)
        }
        getData()
    }, [sort])
    return (
        <div>
            <Helmet>
                <title>
                    PetNest|Donation Campaigns 
                </title>
            </Helmet>
             <div className="font-Lato container mx-auto my-10 ">
             <h3 className="my-10 lg:text-5xl sm:text-[18px] text-center font-medium text-[#155263]">All Donation Campaigns</h3>
            <select 
                onChange={e => {
                    setSort(e.target.value)
                }}
                value={sort}
                name='sort'
                id='sort'
                className='border p-4 rounded-md bg-[#ff9a3c] my-20 border-none text-white flex justify-center mx-auto'
            >
                <option value=''>Sort By Date</option>
                <option value='asce'>Ascending Order</option>
                <option value='desce'>Descending Order</option>
            </select>
            <div className=" grid  lg:grid-cols-3 grid-cols-1 gap-8 ">
                {
                    donations.map( donation=> <DonationCard
                        key={donation._id}
                        donation={donation}>
                    </DonationCard>)
                }
            </div>
           
        </div>
            
        </div>
    );
};

export default DonationCampaigns;