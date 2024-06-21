import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Firebaseprovider/FirebaseProvider";
import axios from "axios";
import MyCampaignTable from "../../../components/MyCampaignTable";


const MyAddedPets = () => {
    const { user } = useContext(AuthContext)
    const [item,setItem] = useState([])
    useEffect(() => {
        const getData =  async() =>
            {
                const {data} = await axios(`${import.meta.env.VITE_API_URL}/donation/${user?.email}`)
                setItem(data)
            }
        getData()
    }, [])
    return (
        <div className="container mx-auto font-Lato">
              {item.length === 0 ? (
            <p className="text-center lg:text-3xl text-[18px] my-10 font-medium text-gray-500">No Posts Available</p>
        ) : (
             <div className="my-10 mx-auto container flex flex-col justify-center">

            <table className="w-full p-6 text-xs text-center whitespace-nowrap">
                        <colgroup>
                            <col className="w-7" />
                            <col className="w-7"/>
                            <col className="w-7"/>
                            <col className="w-7"/>
                            <col className="w-7"/>
                            <col className="w-7"/>
                            <col className="w-7" />
                        </colgroup>
                         <thead>
                            <tr className="dark:bg-gray-300 text-[#5c715e] font-Lato">
                                <th className=" px-3 py-2 w-1/6 text-[16px] lg:text-xl font-medium">Pet Name</th>
                                <th className=" px-3 py-2 w-1/6 text-[16px] lg:text-xl font-medium">Max. Donation Amount</th>
                                <th className=" px-3 py-2 w-1/6 text-[16px] lg:text-xl font-medium">Progress</th>
                                <th className=" px-3 py-2 w-1/6 text-[16px] lg:text-xl font-medium">Edit</th>
                                <th className=" px-3 py-2 w-1/6 text-[16px] lg:text-xl font-medium">View Donators</th>
                                <th className=" px-3 py-2 w-1/6 text-[16px] lg:text-xl font-medium">Pause</th>    
                               
                            </tr>
                        </thead> 
                        </table>
           
           <div className="container my-10 mx-auto">
           {
            
                item.map((item,index) => <MyCampaignTable
                 key={item._id}
                item ={item}
                index={index + 1}
                >
                </MyCampaignTable>)
            }
           </div>
        </div> )}
        </div>
    );
};

export default MyAddedPets;