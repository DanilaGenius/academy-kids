import Card from "../../Card/Card"
import "./ChoiceOfSimulator.scss"

const ChoiceOfSimulator = () => {
    const cards = [{text: "Флеш-анзан", imgForBg: "card-anzan.png"}, 
                   {text: "Флеш-карты", imgForBg: "card-cards.png"},
                   {text: "Столбцы", imgForBg: "card-rows.png"},
                   {text: "Умножайка", imgForBg: "card-multiplication.png"},
                   {text: "Генератор", imgForBg: "card-generator.png"},]

    return (
        <div className="choiceofsimulator">
            <h1 className="choiceofsimulator__title">
                Выберите тренажёр
            </h1>

            <div className="choiceofsimulator__cards">
                {cards.map((card, key) => {
                    return (<Card className="choiceofsimulator__card" key={key}
                    text={card.text} nameOfImage={card.imgForBg}/>)
                })}
            </div>
        </div>
    )
}

export default ChoiceOfSimulator 