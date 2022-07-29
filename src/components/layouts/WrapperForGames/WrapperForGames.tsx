import "./WrapperForGames.scss";
import FunctionButton from "../../FunctionButton/FunctionButton";
import FlashAnzan from "../FlashAnzan/FlashAnzan"
import FlashCards from "../FlashCards/FlashCards"
import Columns from "../Columns/Columns";
import Multiplication from "../Multiplication/Multiplication";
import Generator from "../Generator/Generator";

export interface Props {
    title: string;
}

const WrapperForGames: React.FC<Props> = ({title}) => {
        const keyLowerCase = title.toLocaleLowerCase()

        function createControleBtns(key:string = keyLowerCase) {  
            if (key === "флеш-анзан".toLocaleLowerCase()) {
                return (
                        <div className="wrapperforgames__fn-btns">
                            <FunctionButton nameOfImage="start.png" sizeIcon="50px"
                            bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                            <FunctionButton nameOfImage="settnings.png" sizeIcon="50px"
                            bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                            <FunctionButton nameOfImage="volume-toggle.png" sizeIcon="50px"
                            bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                            <FunctionButton nameOfImage="fullscreen.png" sizeIcon="50px"
                            bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                        </div>
                )
            }  
            
            if (key === "Флеш карты".toLocaleLowerCase()) {
                return (
                        <div className="wrapperforgames__fn-btns">
                            <FunctionButton nameOfImage="start.png" sizeIcon="50px"
                            bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                            <FunctionButton nameOfImage="settnings.png" sizeIcon="50px"
                            bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                            <FunctionButton nameOfImage="volume-toggle.png" sizeIcon="50px"
                            bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                            <FunctionButton nameOfImage="fullscreen.png" sizeIcon="50px"
                            bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                        </div>
                )
            }

            if (key === "Столбцы".toLocaleLowerCase()) {
                return (
                        <div className="wrapperforgames__fn-btns">
                            <FunctionButton nameOfImage="start.png" sizeIcon="50px"
                            bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                            <FunctionButton nameOfImage="settnings.png" sizeIcon="50px"
                            bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                            <FunctionButton nameOfImage="fullscreen.png" sizeIcon="50px"
                            bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                        </div>
                )
            }

            if (key === "Умножайка".toLocaleLowerCase()) {
                return (
                        <div className="wrapperforgames__fn-btns">
                        <FunctionButton nameOfImage="start.png" sizeIcon="50px"
                        bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                        <FunctionButton nameOfImage="settnings.png" sizeIcon="50px"
                        bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                        <FunctionButton nameOfImage="fullscreen.png" sizeIcon="50px"
                        bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                        </div>
                )
            }

            if (key === "Генератор".toLocaleLowerCase()) {
                return (
                        <div className="wrapperforgames__fn-btns">
                        <FunctionButton nameOfImage="start.png" sizeIcon="50px"
                        bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                        <FunctionButton nameOfImage="settnings.png" sizeIcon="50px"
                        bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                        <FunctionButton nameOfImage="fullscreen.png" sizeIcon="50px"
                        bgColor="linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"/>
                        </div>
                )
            }
        }

        function createFastSetting(key:string = keyLowerCase) {
            if (key === "флеш-анзан".toLocaleLowerCase()) {
                return (
                    <FlashAnzan />
                )
            }  
            
            if (key === "Флеш карты".toLocaleLowerCase()) {
                return (
                    <FlashCards />
                )
            }

            if (key === "Столбцы".toLocaleLowerCase()) {
                return (
                    <Columns />
                )
            }

            if (key === "Умножайка".toLocaleLowerCase()) {
                return (
                    <Multiplication />
                )
            }

            if (key === "Генератор".toLocaleLowerCase()) {
                return (
                    <Generator />                  
                )
            }
        }
 

    return (
        <div className="wrapperforgames">
            <h2 className="wrapperforgames__title">
                {title}
                <span className="wrapperforgames__title-circle"></span>
                <span className="wrapperforgames__title-circle"></span>
                <span className="wrapperforgames__title-circle"></span>
                <span className="wrapperforgames__title-circle"></span>
            </h2>

            {createControleBtns()}
            {createFastSetting()}
   
        </div>
    )
}

export default WrapperForGames