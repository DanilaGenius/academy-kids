import "./FunctionButton.scss"

export interface Props {
    nameOfImage: string;
    label?: string;
    style?: React.CSSProperties;
}

const FunctionButton: React.FC<Props> = (props:Props) => {
    const path = require(`../../images/${props.nameOfImage}`)

    return (
        <div className="functionbutton" style={props.style}>
            <img className="functionbutton__img" src={path} alt="icon">

            </img>

            <h4 className="functionbutton__text">
                {props.label ? props.label : ""}
            </h4>
        </div>
    )
}

export default FunctionButton 