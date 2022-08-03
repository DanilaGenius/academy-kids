import React, { MouseEvent, useState } from "react";
import "./InputNumberBlocks.scss"

interface Props {
    title?:string,
    arrayOfNumbers?: Array<number>,
}

const InputNumberBlocks: React.FC<Props> = ({title = "Цифры", arrayOfNumbers = [1,2,3,4,5,6,7,8,9]}) => { 
    const sortArray:Array<string> = arrayOfNumbers.sort(function(a, b) {
        return a - b;
      }).map(e => e.toString())

    const min:string = sortArray[0];
    const max:string = sortArray[sortArray.length - 1];
    const intervalOfNum:string = `${min}-${max}`;

    const styleActiveBlock = {
        color: "#FFFFFF",
        background: "linear-gradient(142.82deg, #97CE4E 11.11%, #58AA2C 83.28%)",
        border: "solid 2px gold",
    }

    const styleInactiveBlock = {
            color: "#694A04",
            background: "rgba(244, 248, 252, 0.5)",
            border: "none",
    }

    const CreateBlok = (value:string): React.ReactNode => {
        const [state, setState] = useState(false)
        return (
            <div className="inputnumberblocks__block inputnumberblocks__block-actve"
            onClick={() => setState(!state)} 
            style={(state) ? styleActiveBlock : styleInactiveBlock} 
            key={value}
            >{value}</div>
        )
    }

    return (
        <div className="inputnumberblocks">

            <div className="inputnumberblocks__title">
                {title}
            </div>

            <div className="inputnumberblocks__wrap">
                {sortArray.map((value:string): React.ReactNode => {
                    return CreateBlok(value)
                })}
                {CreateBlok(intervalOfNum)}
            </div>
        </div>
    )
}

export default InputNumberBlocks