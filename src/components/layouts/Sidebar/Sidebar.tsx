import "./Sidebar.scss";
import FunctionButton from "../../FunctionButton/FunctionButton"


const Sidebar:React.FC = () => {
    return (
        <aside className="sidebar">
            <a className="sidebar__logo" href="/"></a>

            <div className="sidebar__list">
                <FunctionButton nameOfImage="flash-anzan.png" label="Флеш-анзан" style={{marginBottom: '30px'}}/>
                <FunctionButton nameOfImage="flash-cards.png" label="Флеш-карты" style={{marginBottom: '30px'}}/>
                <FunctionButton nameOfImage="columns.png" label="Столбцы" style={{marginBottom: '30px'}}/>
                <FunctionButton nameOfImage="multiplier.png" label="Умножайка" style={{marginBottom: '30px'}}/>
                <FunctionButton nameOfImage="generator.png" label="Генератор" style={{marginBottom: '30px'}}/>
                <FunctionButton nameOfImage="rating.png" label="Рейтинг"/>
            </div>

            <div className="sidebar__close">
                <FunctionButton nameOfImage="back.png" label="Свернуть"/>
            </div>
        </aside>
    )
}
export default Sidebar 
