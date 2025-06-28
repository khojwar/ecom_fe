const TableComponent = () => {
    return (
        <div>
            <table border={4}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Address</th>
                    <th colSpan={3}>Action</th>
                </tr>
                <tr>
                    <td>Tika Ram</td>
                    <td>khojwartikarm@gmail.com</td>
                    <td>prof.</td>
                    <td>Male</td>
                    <td>active</td>
                    <td>KTM</td>
                    <td>
                        <button>E</button>
                        <button>V</button>
                        <button>D</button>
                    </td>
                </tr>
                <tr>
                    <td>Tika Ram</td>
                    <td>khojwartikarm@gmail.com</td>
                    <td>prof.</td>
                    <td>Male</td>
                    <td>active</td>
                    <td>KTM</td>
                    <td>
                        <button>E</button>
                        <button>V</button>
                        <button>D</button>
                    </td>
                </tr>

            </table>
        </div>
    )
}

export default TableComponent;