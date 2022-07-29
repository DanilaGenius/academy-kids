import React from "react";
import "./FunctionButton.scss"

export interface Props extends React.ClassAttributes<HTMLAllCollection> {
    nameOfImage: string;
    label?: string;
    style?: React.CSSProperties;
    sizeIcon: string;
    bgColor: string;
    bgColorHover?: string;
    bgColorActive?: string;
}

const FunctionButton: React.FC<Props> = ({nameOfImage, label, style, sizeIcon, bgColor, bgColorHover, bgColorActive}) => {
    const img = require(`../../images/${nameOfImage}`)

    
    const cssIcon: React.CSSProperties = {
        height: sizeIcon,
        width: sizeIcon,
        background: bgColor,
    }

    return (
        <div className="functionbutton" style={style}>
            
            <div className="functionbutton__icon" style={cssIcon}> 
                <img className="functionbutton__img" src={img} alt="icon" />
            </div>
            
            {label ? (<h4 className="functionbutton__text">{label}</h4>) : null}
        </div>
    )
}

export default FunctionButton 