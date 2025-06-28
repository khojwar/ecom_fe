
interface IDescriptionText {
    data: string;
    className?: string;
}


const DescriptionText = ({data, className}: Readonly<IDescriptionText>) => {
    return (
        <div className={`text-justify ${className}`}>
            <p>{data}</p>
        </div>
    )
}

export default DescriptionText;