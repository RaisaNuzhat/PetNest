/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const AllDonationsTable = ({item}) => {
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/pets/${_id}`);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                } catch (err) {
                    console.log(err.message);
                }
            }
        });
    };
    return (
        <div className="container mx-auto font-Lato">
             <div className="overflow-x-auto">
                <table className="w-full p-6 text-xs text-center whitespace-nowrap">
                    <colgroup>
                        <col className="w-1/7" />
                        <col className="w-1/7" />
                        <col className="w-1/7" />
                        <col className="w-1/7" />
                        <col className="w-1/7" />
                        <col className="w-1/7" />
                        <col className="w-1/7" />
                    </colgroup>
                    <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                        <tr>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                <p className=" text-gray-900 whitespace-no-wrap'">{item.orgname}</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap'">{item.petname}</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap'">{item.maxamount}</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap'">{item.deadline}</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <Link to={`/dashboard/editdonation/${item._id}`} className="btn bg-[#155263] text-[16px] lg:font-medium font-normal text-white">Update</Link>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <button onClick={() => handleDelete(item._id)} className="btn bg-[#155263] text-[16px] lg:font-medium font-normal text-white">Delete</button>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <button className="btn bg-[#155263] text-[16px] lg:font-medium font-normal text-white">Pause</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDonationsTable;