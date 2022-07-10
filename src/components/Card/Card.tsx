import "./Card.scss"


export interface Props {
    text: string;
    nameOfImage: string;
}

const Card: React.FC<Props> = ({text, nameOfImage}:Props) => {
    const path = require(`../../images/${nameOfImage}`)
    
    return (
        <div className="card" style={{backgroundImage: `url('${path}')`}}>
            <div className="card__name">
                <h2 className="card__text">{text}</h2>
            </div>
        </div>  
    )
}

export default Card