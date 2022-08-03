import "./WrapperForGames.scss";
import FunctionButton from "../../FunctionButton/FunctionButton";

import FlashAnzanFS from "../FlashAnzanFS/FlashAnzanFS"
import FlashCardsFS from "../FlashCardsFS/FlashCardsFS"
import ColumnsFS from "../ColumnsFS/ColumnsFS";
import MultiplicationFS from "../MultiplicationFS/MultiplicationFS";
import GeneratorFS from "../GeneratorFS/GeneratorFS";

import FlashAnzanAS from "../FlashAnzanAS/FlashAnzanAS"

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
                    <FlashAnzanFS />
                )
            }  
            
            if (key === "Флеш карты".toLocaleLowerCase()) {
                return (
                    <FlashCardsFS />
                )
            }

            if (key === "Столбцы".toLocaleLowerCase()) {
                return (
                    <ColumnsFS />
                )
            }

            if (key === "Умножайка".toLocaleLowerCase()) {
                return (
                    <MultiplicationFS />
                )
            }

            if (key === "Генератор".toLocaleLowerCase()) {
                return (
                    <GeneratorFS />                  
                )
            }
        }

        function createAdvancedSetting(key:string = keyLowerCase) {
            if (key === "флеш-анзан".toLocaleLowerCase()) {
                return (
                    <FlashAnzanAS />
                )
            }  
            
            if (key === "Флеш карты".toLocaleLowerCase()) {
                return (
                    '0'
                )
            }

            if (key === "Столбцы".toLocaleLowerCase()) {
                return (
                    '0'
                )
            }

            if (key === "Умножайка".toLocaleLowerCase()) {
                return (
                    '0'
                )
            }

            if (key === "Генератор".toLocaleLowerCase()) {
                return (
                    '0'              
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
            {/* {createFastSetting()} */}
            {createAdvancedSetting()}
   
        </div>
    )
}

export default WrapperForGames