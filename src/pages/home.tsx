import DescriptionText from "../components/description";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-4" >  
            <DescriptionText data="Welcome to the E-commerce CMS" />
            <DescriptionText data="This is a simple CMS for managing e-commerce products." />
        </div>
    )
}

export default HomePage;