import React from "react";
import FunctionButton from "../../FunctionButton/FunctionButton"
import "./MenuAside.scss"

const MenuAside:React.FC = () => {
    const avatar = require("../../../images/avatar.png")
    const bgColor = "linear-gradient(142.82deg, #8DC8F0 11.11%, #1593DF 83.28%)"
    
    return (
        <div className="menuaside">
            <img src={avatar} alt="avatar" className="menuaside__avatar"/>

            <div className="menuaside__btns">
                <FunctionButton nameOfImage="messages.png" sizeIcon="40px"  
                        bgColor={bgColor} 
                        style={{marginBottom: '10px'}}/>
                <FunctionButton nameOfImage="profile.png" sizeIcon="40px" 
                        bgColor={bgColor} 
                        style={{marginBottom: '10px'}}/>
                <FunctionButton nameOfImage="options.png" sizeIcon="40px" 
                        bgColor={bgColor} 
                        style={{marginBottom: '10px'}}/>
                <FunctionButton nameOfImage="friends.png" sizeIcon="40px" 
                        bgColor={bgColor} />
            </div>

            <div className="menuaside__exit">
                <FunctionButton nameOfImage="exit.png" sizeIcon="40px"
                        bgColor={bgColor} />
            </div>
        </div>
    )
}

export default MenuAside 