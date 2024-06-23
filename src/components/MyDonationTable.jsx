/* eslint-disable react/prop-types */
const MyDonationTable = ({ item }) => {
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <div className="overflow-x-auto">
                <table className="w-full p-6 text-xs text-center whitespace-nowrap">
                    <colgroup>
                        <col className="w-1/7" />
                        <col className="w-1/7" />
                    </colgroup>
                    <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap'">{item.maxamount}</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap'">{item.donator.donatorname}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDonationTable;