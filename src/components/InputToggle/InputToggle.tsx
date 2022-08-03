import React, { useState } from "react"
import "./InputToggle.scss"

interface Props {
    title:string,
    className?: string
}

const InputToggle: React.FC<Props> = ({title, className}) => {
    const [state, setState] = useState({isActive:false})

    const bg = "#FF5722"
    const bgActive = "#70B839"

    return (
        <div className={"inputtoggle " + className}>
            <div className="inputtoggle__title">
                {title}
            </div>

            <div className="inputtoggle__input" 
                style={{
                    background: (state.isActive ? bgActive : bg),
                    justifyContent: (state.isActive ? "flex-end" : "flex-start"),
                }}
                onClick={() => {
                    setState({isActive: !state.isActive})
                }}
                onMouseDown={(event) => {
                    event.preventDefault()
                }}>

                <span className="inputtoggle__input-move">
                </span>
            </div>
        </div>
    )
}

export default InputToggle