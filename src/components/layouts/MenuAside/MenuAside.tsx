import React from "react";
import FunctionButton from "../../FunctionButton/FunctionButton"
import "./MenuAside.scss"

const MenuAside:React.FC = () => {
    const avatar = require("../../../images/avatar.png")

    return (
        <div className="menuaside">
            <img src={avatar} alt="avatar" className="menuaside__avatar"/>

            <div className="menuaside__btns">
                <FunctionButton nameOfImage="messages.png" style={{marginBottom: '10px'}}/>
                <FunctionButton nameOfImage="profile.png" style={{marginBottom: '10px'}}/>
                <FunctionButton nameOfImage="options.png" style={{marginBottom: '10px'}}/>
                <FunctionButton nameOfImage="friends.png" />
            </div>

            <div className="menuaside__exit">
                <FunctionButton nameOfImage="exit.png"/>
            </div>
        </div>
    )
}

export default MenuAside 