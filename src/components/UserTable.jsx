/* eslint-disable react/prop-types */
import toast from 'react-hot-toast'
import { useState } from "react"
import UpdateUserModal from "./modal/UpdateUserModal"
import { useMutation } from '@tanstack/react-query'
import useAxiosSecure from '../hooks/useAxiosSecure'
import useAuth from '../hooks/useAuth'
const UserTable = ({ item ,refetch}) => {
   console.log(item)
   const [isOpen,setIsOPen] = useState(false)
   const { user: loggedInUser } = useAuth()
   const axiosSecure=  useAxiosSecure()
   const { mutateAsync } = useMutation({
    mutationFn: async role => {
      const { data } = await axiosSecure.patch(
        `/users/update/${item?.email}`,
        role
      )
      return data
    },
    onSuccess: data => {
      refetch()
      console.log(data)
      toast.success('User role updated successfully!')
 
      setIsOPen(false)
    },
  })
  const modalHandler = async selected => {
    if (loggedInUser.email === item.email) {
      toast.error('Action Not Allowed')
      return setIsOPen(false)
    }
  
  
    const userRole = {
      role: selected,
      status: 'Verified',
    }

    try {
      await mutateAsync(userRole)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  
  }
  return (
    <tr className="font-Lato">
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{item?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{item?.role}</p>
      </td>
       <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {item?.status ? (
          <p
            className={`${
              item.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
            } whitespace-no-wrap`}
          >
            {item.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td> 

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button onClick={()=>setIsOPen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold bg-[#ff9a3c] rounded-2xl p-3 text-white leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0   rounded-full'
          ></span>
          <span className='relative text-white'>Make Admin</span>
        </button>
        {/* Update User Modal */}
        <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOPen}  modalHandler={modalHandler} item={item} />
      </td>
    </tr>
  )
}



export default UserTable
