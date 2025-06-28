const TableComponent = () => {
    return (
        <div>
            <table className="w-full border-collapse border border-gray-300">
                <tr className="border">
                    <th className="border border-gray-300">Name</th>
                    <th className="border border-gray-300">Email</th>
                    <th className="border border-gray-300">Role</th>
                    <th className="border border-gray-300">Gender</th>
                    <th className="border border-gray-300">Status</th>
                    <th className="border border-gray-300">Address</th>
                    <th className="border border-gray-300">Action</th>
                </tr>
                <tr className="border">
                    <td className="border border-gray-300">Tika Ram</td>
                    <td className="border border-gray-300">khojwartikarm@gmail.com</td>
                    <td className="border border-gray-300">prof.</td>
                    <td className="border border-gray-300">Male</td>
                    <td className="border border-gray-300">active</td>
                    <td className="border border-gray-300">KTM</td>
                    <td className="border border-gray-300">
                        <button className="border border-gray-300">E</button>
                        <button className="border border-gray-300">V</button>
                        <button className="border border-gray-300">D</button>
                    </td>
                </tr>
                <tr className="border">
                    <td className="border border-gray-300">Tika Ram</td>
                    <td className="border border-gray-300">khojwartikarm@gmail.com</td>
                    <td className="border border-gray-300">prof.</td>
                    <td className="border border-gray-300">Male</td>
                    <td className="border border-gray-300">active</td>
                    <td className="border border-gray-300">KTM</td>
                    <td className="border border-gray-300">
                        <button className="border border-gray-300">E</button>
                        <button className="border border-gray-300">V</button>
                        <button className="border border-gray-300">D</button>
                    </td>
                </tr>

            </table>
        </div>
    )
}

export default TableComponent;