import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";
import AllPetsTable from "../../../components/AllPetsTable";
const AllPets = () => {
    const [items, setItem] = useState([])
    console.log(items)
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/pets`)
            setItem(data)
        }
        getData()
    }, [])
    return (
        <div className="container mx-auto font-Lato px-4 sm:px-8">
            <Helmet>
                <title>Dashboard:Admin||All Pets</title>
            </Helmet>
            <h4 className="text-center text-xl font-medium">All Pets Users Have Added</h4>

            {items.length === 0 ? (
            <p className="text-center lg:text-3xl text-[18px] my-10 font-medium text-gray-500">No Donation Campaigns Available</p>
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
                            <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >Username</th>
                                 <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >Pet Name</th>
                                 <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >Category</th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >Age</th>
                                 <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    ></th>
                                 <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >Update</th>
                                 <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >Delete</th>
                               
                               
                            </tr>
                        </thead> 
                        </table>
           
           <div className="container my-10 mx-auto">
           {
            
                items.map((item,index) => <AllPetsTable
                 key={item._id}
                item ={item}
                index={index + 1}
                >
                </AllPetsTable>)
            }
           </div>
        </div> )}
        </div>
    );
};

export default AllPets;