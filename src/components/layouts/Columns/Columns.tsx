import "./Columns.scss"
import InputNumber from "../../InputNumber/InputNumber"
import DefaultButton from "../../DefaultButton/DefaultButton"


const Columns: React.FC = () => {
    return (
        <div className="columns">
            <div className="columns__inputs">

                <InputNumber name="q" label="количество чисел" defaultValue="1" 
                    step={1} min={1} max={10} />
                <InputNumber name="w" label="количество цифр" defaultValue="1" 
                    step={1} min={1} max={10} />
                <InputNumber name="e" label="Скорость, сек." defaultValue="1" 
                    step={1} min={1} max={10} />
            </div>

            <DefaultButton className="columns__btn-start"
                text="Начать" maxwidth="475px" padding="15px 100px" bg="#97CE4E" color="#FFFFFF" bgHover="green" colorHover="#FFFFFF" isHover={false} />
        </div>
    )
}


export default Columns