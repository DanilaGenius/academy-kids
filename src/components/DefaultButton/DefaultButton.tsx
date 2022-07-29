import { useState } from "react";
import "./DefaultButton.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    maxwidth: string;
    padding: string;
    bg: any;
    color: any;
    bgHover: any;
    colorHover: any;
    isHover?: boolean;
}

const DefaultButton: React.FC<Props> = ({text, maxwidth, padding, bg, color, bgHover, colorHover, isHover=false}) => {
    const stateOut = {
        isHover
    }
    const [state, setState] = useState(isHover)

    const style: React.CSSProperties = {
        maxWidth: maxwidth,
        padding: padding,
        background: (stateOut.isHover || state) ? (bgHover || bg) : bg,
        color: (stateOut.isHover || state) ? (colorHover || color) : color,
    }

    const eventOnMouseOver = () =>{
        stateOut.isHover = true
        setState(true)
    }

    const eventOnMouseOut = () => {
        stateOut.isHover = false
        setState(false)
    }
    
    return (
        <div  className="defaultbutton" style={style}
         onMouseOver={() => eventOnMouseOver()} onMouseOut={() => eventOnMouseOut()}>
            <h3 className="defaultbutton__text">{text}</h3>
         </div>
    )
}

export default DefaultButton
