import "./ContentWrapper.scss";
import ChoiceOfSimulator from "../ChoiceOfSimulator/ChoiceOfSimulator";
import WrapperForGames from "../WrapperForGames/WrapperForGames";


const ContentWrapper: React.FC = () => {
    return (
        <div className="contentwrapper">
            <WrapperForGames title="флеш-анзан"/>
            {/* <WrapperForGames title="Флеш карты"/> */}
            {/* <WrapperForGames title="Столбцы"/> */}
            {/* <WrapperForGames title="Умножайка"/> */}
            {/* <WrapperForGames title="Генератор"/> */}
            {/* <ChoiceOfSimulator /> */}
        </div>
    )
}

export default ContentWrapper 