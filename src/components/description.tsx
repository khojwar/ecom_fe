
interface IDescriptionText {
    data: string;
    className?: string;
}


const TextToPrint = ({data}: Readonly<{data: string}>) => {
    return (
        <div>
            <p>{data}</p>
        </div>
    )
}

const DescriptionText = ({data, className}: Readonly<IDescriptionText>) => {
    return (
        <div className={`text-justify ${className}`}>
            <TextToPrint data={data} />
        </div>
    )
}

export default DescriptionText;