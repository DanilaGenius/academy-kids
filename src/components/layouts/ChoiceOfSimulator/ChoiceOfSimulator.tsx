import Card from "../../Card/Card"
import "./ChoiceOfSimulator.scss"

const ChoiceOfSimulator = () => {
    return (
        <div className="choiceOfSimulator">
            <h1 className="choiceOfSimulator__title">
                Выберите тренажёр
            </h1>

            <div className="choiceOfSimulator__cards">
                <Card text="Флеш-анзан" nameOfImage="card-anzan.png"/>
                <Card text="Флеш-карты" nameOfImage="card-cards.png"/>
                <Card text="Столбцы" nameOfImage="card-rows.png"/>
                <Card text="Умножайка" nameOfImage="card-multiplier.png"/>
                <Card text="Генератор" nameOfImage="card-generator.png"/>
            </div>
        </div>
    )
}

export default ChoiceOfSimulator 