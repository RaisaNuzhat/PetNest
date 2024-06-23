//import {  useEffect, useState } from "react";
import { Helmet } from "react-helmet";
//import axios from "axios";
import UserTable from "../../../components/UserTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query'
const AllUsers = () => {
    // const [items, setItem] = useState([])
    // console.log(items)
    // useEffect(() => {
    //     const getData =  async() =>
    //         {
    //             const {data} = await axios(`${import.meta.env.VITE_API_URL}/users`)
    //             setItem(data)
    //         }
    //     getData()
    // }, [])
     //   Fetch users Data
    const axiosSecure = useAxiosSecure()
    const {
      data: items = [],
      //isLoading,
      refetch,
    } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const { data } = await axiosSecure(`/users`)
        return data
      },
    })
    return (
        <div>
             <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Dashboard:Admin||All Users</title>
        </Helmet>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                {
                items.map(item => <UserTable
                 key={item._id}
                item ={item}
                refetch={refetch}
                >
                </UserTable>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AllUsers;