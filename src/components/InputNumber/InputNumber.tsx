import "./InputNumber.scss"
import React, {useState, useRef} from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label: string,
    step: number,
    min: number,
    max: number,
}

interface StateInterface {
    inputvalue: number,
}

const InputNumber: React.FC<Props> = ({name, label, step, min, max}) => {
    const [state, setState] = useState<StateInterface>({
        inputvalue: min,
    })

    const inputRef = useRef<HTMLInputElement>(null)

    const eventEnteringNumKeyboard = (event: React.KeyboardEvent) => {
        
        
        const key:string = event.key;
        const currentValue:string = inputRef.current?.value + '';
        let retultValue:number = min;

        if (key === 'Backspace') {
            retultValue = +(currentValue.slice(0, -1))
        }
        else if (/[0-9]/.test(key)) {
            retultValue = +(currentValue + key)
        }
        else {
            event.preventDefault();
            return
        }

        setState({inputvalue: (retultValue > max) ? max : retultValue})
    }

    const choiceInputValue = (event: React.MouseEvent, operation:string = "+", step:number = 1) => {
        event.preventDefault()
        const result = (operation === "+" ? (state.inputvalue + step) : (state.inputvalue - step))
        if (result < min || result > max) {return}
        setState({inputvalue: result})
    }

    return (
        <div className="inputchoiceofnum" >
            <label className="inputchoiceofnum__label" htmlFor={name}>{label}</label>
            
            <div className="inputchoiceofnum__input-wrap">
                <div className="inputchoiceofnum__control" 
                onClick={(event) => {choiceInputValue(event, "-", step)}} 
                onMouseDown={(event) => event.preventDefault()}
                onMouseUp={(event) => event.preventDefault()}>
                    <span className="inputchoiceofnum__control-minus"></span>
                </div>

                <input className="inputchoiceofnum__input" ref={inputRef}
                 type="text" name={name} value={state.inputvalue} readOnly={false} defaultValue={state.inputvalue}
                 onKeyDown={eventEnteringNumKeyboard} />
                
                <div className="inputchoiceofnum__control" 
                onClick={(event) => {choiceInputValue(event, "+", step)}} 
                onMouseDown={(event) => event.preventDefault()}
                onMouseUp={(event) => event.preventDefault()}>
                    <span className="inputchoiceofnum__control-plus"></span>
                    <span className="inputchoiceofnum__control-plus"></span>
                </div>   
            </div>
        </div>
    )
}

export default InputNumber