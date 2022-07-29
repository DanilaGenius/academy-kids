import "./ContentWrapper.scss";
import ChoiceOfSimulator from "../ChoiceOfSimulator/ChoiceOfSimulator";
import WrapperForGames from "../WrapperForGames/WrapperForGames";


const ContentWrapper: React.FC = () => {
    return (
        <div className="contentwrapper">
            <WrapperForGames title="Умножайка"/>
            {/* <ChoiceOfSimulator /> */}
        </div>
    )
}

export default ContentWrapper 