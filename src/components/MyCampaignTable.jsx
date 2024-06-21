/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MyCampaignTable = ({ item }) => {
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <div className="overflow-x-auto">
                <table className="w-full p-6 text-xs text-center whitespace-nowrap">
                    <colgroup>
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                    </colgroup>
                    <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                        <tr>
                            <td className="px-3 py-2 text-[12px] lg:text-[14px] font-medium dark:text-gray-600">
                                <p className="text-center">{item.petname}</p>
                            </td>
                            <td className="px-3 py-2 text-[12px] lg:text-[14px] font-medium dark:text-gray-600">
                                <p className="text-center">{item.maxamount}</p>
                            </td>
                            <td className="px-3 py-2 text-[12px] lg:text-[14px] font-medium dark:text-gray-600">
                                <div className="radial-progress text-[#ff9a3c]" style={{"--value":20}} role="progressbar">20%</div>
                            </td>
                            <td className="px-3 py-2 text-[12px] lg:text-[14px] font-medium dark:text-gray-600">
                                <Link to={`/dashboard/editdonation/${item._id}`} className="btn bg-[#ff9a3c] text-[16px] lg:font-medium font-normal text-white">Edit</Link>
                            </td>
                            <td className="px-3 py-2 text-[12px] lg:text-[14px] font-medium dark:text-gray-600">
                                <Link to='/donors' className="btn bg-[#ff9a3c] text-[16px] lg:font-medium font-normal text-white">Donators</Link>
                            </td>
                            <td className="px-3 py-2 text-[12px] lg:text-[14px] font-medium dark:text-gray-600">
                                <button className="btn bg-[#ff9a3c] text-[16px] lg:font-medium font-normal text-white">Pause</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaignTable;
