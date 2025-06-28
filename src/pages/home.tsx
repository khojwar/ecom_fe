import TableComponent from "../components/table";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-4" >  
            <TableComponent />
            <TableComponent />
            <TableComponent />
        </div>
    )
}

export default HomePage;