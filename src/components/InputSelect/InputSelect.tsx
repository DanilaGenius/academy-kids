import "./InputSelect.scss"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label: string,
}

const InputSelect: React.FC<Props> = ({name, label}) => {
    return (
        <div className="inputselect" >
            <label className="inputselect__label" htmlFor={name}>{label}</label>
            
            <div className="inputselect__select-wrap"
            onMouseUp={(event) => event.preventDefault()}>

                <select className="inputselect__select" name={name} id={name}>
                    <option className="inputselect__select-value" value="red">red</option>
                    <option className="inputselect__select-value" value="blue">blue</option>
                    <option className="inputselect__select-value" value="green">green</option>
                </select>
                
            </div>
        </div>
    )
}

export default InputSelect