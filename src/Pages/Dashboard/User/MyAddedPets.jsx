import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Firebaseprovider/FirebaseProvider";
import axios from "axios";
import MyPetsTable from "../../../components/MyPetsTable";

const MyAddedPets = () => {
    const { user } = useContext(AuthContext)
    const [item,setItem] = useState([])
    useEffect(() => {
        const getData =  async() =>
            {
                const {data} = await axios(`${import.meta.env.VITE_API_URL}/pet/${user?.email}`)
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
                            <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >Serial NO.</th>
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
                    >Status</th>
                                 <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >Update</th>
                                 <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >Delete</th>
                                 <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >Adopted</th>
                                
                               
                            </tr>
                        </thead> 
                        </table>
           
           <div className="container my-10 mx-auto">
           {
            
                item.map((item,index) => <MyPetsTable
                 key={item._id}
                item ={item}
                index={index + 1}
                >
                </MyPetsTable>)
            }
           </div>
        </div> )}
        </div>
    );
};

export default MyAddedPets;