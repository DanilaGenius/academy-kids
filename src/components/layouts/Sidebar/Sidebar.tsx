import "./Sidebar.scss";
import FunctionButton from "../../FunctionButton/FunctionButton"


const Sidebar:React.FC = () => {
    const bgColor = "linear-gradient(142.82deg, #97CE4E 11.11%, #58AA2C 83.28%)"

    return (
        <aside className="sidebar">
            <a className="sidebar__logo" href="/"></a>

            <div className="sidebar__list">
                <FunctionButton nameOfImage="flash-anzan.png" sizeIcon="40px"
                    bgColor={bgColor} 
                    label="Флеш-анзан" style={{marginBottom: '30px'}}/>
                <FunctionButton nameOfImage="flash-cards.png" sizeIcon="40px"
                    bgColor={bgColor}
                    label="Флеш-карты" style={{marginBottom: '30px'}}/>
                <FunctionButton nameOfImage="columns.png" sizeIcon="40px"
                    bgColor={bgColor}
                    label="Столбцы" style={{marginBottom: '30px'}}/>
                <FunctionButton nameOfImage="multiplication.png" sizeIcon="40px"
                    bgColor={bgColor}
                    label="Умножайка" style={{marginBottom: '30px'}}/>
                <FunctionButton nameOfImage="generator.png" sizeIcon="40px"
                    bgColor={bgColor}
                    label="Генератор" style={{marginBottom: '30px'}}/>
                <FunctionButton nameOfImage="rating.png" sizeIcon="40px"
                    bgColor={bgColor}
                    label="Рейтинг" style={{marginBottom: '30px'}}/>
            </div>

            <div className="sidebar__close">
                <FunctionButton nameOfImage="back.png" sizeIcon="40px"
                bgColor={bgColor}
                label="Свернуть"/>
            </div>
        </aside>
    )
}
export default Sidebar 
