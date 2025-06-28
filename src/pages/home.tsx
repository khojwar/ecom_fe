import TableComponent from "../components/table";

const HomePage = () => {
    return (
        // <div style={{ background: '#cccccc', padding: '20px', textAlign: 'center' }}>    // inline css

        // global css
        <div className="text-center" >  
            <TableComponent />
            <TableComponent />
            <TableComponent />
        </div>
    )
}

export default HomePage;