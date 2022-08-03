import "./FlashAnzanFS.scss"
import InputNumber from "../../InputNumber/InputNumber"
import InputSelect from "../../InputSelect/InputSelect"
import DefaultButton from "../../DefaultButton/DefaultButton"

const FlashAnzanFS: React.FC = () => {
    return (
        <div className="flashanzan-fs">
            <div className="flashanzan-fs__inputs">
                <InputSelect name="g" label="Модуль"/>
                
                <InputNumber name="q" label="количество цифр" defaultValue="1" 
                    step={1} min={1} max={10} />
                <InputNumber name="w" label="количество слагаемых" defaultValue="1" 
                    step={1} min={1} max={100} />
                <InputNumber name="e" label="Время, сек." defaultValue="1" 
                    step={1} min={1} max={1000} />
            </div>

            <DefaultButton className="flashanzan-fs__btn-start"
             text="Начать" maxwidth="475px" padding="15px 100px" bg="#97CE4E" color="#FFFFFF" bgHover="green" colorHover="#FFFFFF" isHover={false} />
        </div>
    )
}

export default FlashAnzanFS