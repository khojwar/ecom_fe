
interface IDescriptionText {
    data: string;
}


const DescriptionText = (props: Readonly<IDescriptionText>) => {
    return (
        <div>
            <p>{props.data}</p>
        </div>
    )
}

export default DescriptionText;