import "./InputsRadio.scss"
import {useEffect, useRef} from "react"

interface Props {
    title: string,
    arrNamesRatio: Array<string>,
}

const InputsRadio: React.FC<Props> = ({title, arrNamesRatio}) => {
    const spansOfInput = useRef([]);
    
    return (
        <div className="inputsradio">
            <div className="inputsradio__title">
                {title}
            </div>

            <div className="inputsradio__wrap">
                
                {arrNamesRatio.map((name, index) => {
                    return (
                        <div className="inputradio" key={index}>

                            <div className="inputradio__input"
                                onClick={(event) => {
                                    spansOfInput.current.forEach((e:HTMLElement) => {
                                        e.classList.remove("inputradio__input-active")
                                        if (event.currentTarget.lastChild == e) {
                                            e.classList.add("inputradio__input-active")
                                        }
                                    })
                                }}
                                onMouseDown={(e) => {
                                    e.preventDefault()
                                }}> 

                                <span ref={(element:never) => {spansOfInput.current.push(element)}}></span>
                            </div>

                            <div className="inputradio__label">{name}</div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default InputsRadio

