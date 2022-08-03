import { useState } from "react"
import "./InputRadio.scss"

interface Props {
    name: string,
    key: string,
}

const InputRadio: React.FC<Props> = ({name, key}) => {
    const [state, changeState] = useState(false)
    return (
        <div className="inputradio" key={key}>
            <div className="inputradio__input"
                onClick={() => {
                    changeState(!state)
                }}
                onMouseDown={(e) => {
                    e.preventDefault()
                }}> 
                {state ? <span className="inputradio__input-active"></span> : ''}
            </div>
            <div className="inputradio__label">{name}</div>
        </div>
    )
}


export default InputRadio

