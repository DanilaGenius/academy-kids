import "./Card.scss"
import DefaultButton from "../DefaultButton/DefaultButton"
import { useState } from "react";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    nameOfImage: string;
}

const Card: React.FC<Props> = ({text, nameOfImage}) => {
    const path = require(`../../images/${nameOfImage}`)
    const [state, setState] = useState(false)

    
    return (
        <div className="card" style={{backgroundImage: `url('${path}')`}}
        onMouseOver={() => setState(true)} onMouseOut={() => setState(false)}>
            <DefaultButton text={text} className="card__btn" maxwidth="auto" padding="10px 20px" 
            bg="#FFFFFF" color="#694A04" 
            bgHover="#97CE4E" colorHover="#FFFFFF"
            isHover={state}/>
        </div>  
    )
}

export default Card