
import { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "../components/PetCard";
import { Helmet } from "react-helmet";
const PetListing = () => {
    const [sort, setSort] = useState('desce')
    const [pets, setPets] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allpets?sort=${sort}`
            )
            setPets(data)
        }
        getData()
    }, [sort])
    return (
        <div className="font-Lato container mx-auto my-10 ">
            <Helmet>
                <title>
                    PetNest|Pet Lists 
                </title>
            </Helmet>
             <h3 className="my-10 lg:text-5xl sm:text-[18px] text-center font-medium text-[#155263]">All Pets</h3>
            <select 
                onChange={e => {
                    setSort(e.target.value)
                }}
                value={sort}
                name='sort'
                id='sort'
                className='border p-4 rounded-md bg-[#155263] my-20 border-none text-white flex justify-center mx-auto'
            >
                <option value=''>Sort By Date</option>
                <option value='asce'>Ascending Order</option>
                <option value='desce'>Descending Order</option>
            </select>
            <div className=" grid  lg:grid-cols-3 grid-cols-1 gap-8 ">
                {
                    pets.map( pet=> <PetCard
                        key={pet._id}
                        pet={pet}>
                    </PetCard>)
                }
            </div>
           
        </div>
    );
};

export default PetListing;