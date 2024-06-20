/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const MyPetsTable = ({item,index}) => {
    console.log(item)
    const handleDelete =  _id =>
    {
       console.log(_id)
       Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/pets/${_id}`)
            console.log(data)
            if(data.deletedCount > 0)
                {
                    Swal.fire({
                             title: "Deleted!",
                            text: "Your file has been deleted.",
                           icon: "success"
                          });
                } 
          } catch (err) {
            console.log(err.message)
          }
        }
      });
    } 
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">

<div className="overflow-x-auto">
    <table className="w-full p-6 text-xs text-center whitespace-nowrap">
        <colgroup>
            <col className="w-6" />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-6" />
        </colgroup>
        {/*  */}
        <tbody className="border-b  dark:bg-gray-50 dark:border-gray-300">
            <tr>
            <td className="px-3 py-2 w-1/4 text-[12px] lg:text-[14px] text-center font-medium dark:text-gray-600">
                    <p className="text-center">{index}</p>
                </td>
                <td className="px-3 py-2 w-1/4 text-[12px] lg:text-[14px] text-center font-medium dark:text-gray-600">
                    <p className="text-center">{item.petname}</p>
                </td>
                <td className="px-3 py-2  w-1/4 text-[12px] lg:text-[14px] text-center font-medium dark:text-gray-600">

                    <p className="text-center">{item.category}</p>
                </td>
                <td className="px-3 py-2 w-1/4 text-[12px] lg:text-[14px] text-center font-medium dark:text-gray-600">
                    <Link to={`/dashboard/updatepet/${item._id}`} className="btn  bg-[#5c715e] text-[16px] lg:font-medium font-normal text-white">Update</Link>

                </td>

                <td className="px-3 py-2 w-1/4 text-[12px] lg:text-[14px] text-center font-medium dark:text-gray-600">
                    <button onClick={() => handleDelete(item._id)}   className="btn  bg-[#5c715e] text-[16px] lg:font-medium font-normal text-white">Delete</button> 

                </td>
                <td className="px-3 py-2 w-1/4 text-[12px] lg:text-[14px] text-center font-medium dark:text-gray-600">
                    <button   className="btn  bg-[#5c715e] text-[16px] lg:font-medium font-normal text-white">Adopted</button> 

                </td>
            </tr>

        </tbody>


    </table>
</div>
</div>
        </div>
    );
};

export default MyPetsTable;