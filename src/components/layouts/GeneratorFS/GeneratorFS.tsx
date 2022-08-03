import "./GeneratorFS.scss"
import InputNumber from "../../InputNumber/InputNumber"
import DefaultButton from "../../DefaultButton/DefaultButton"


const GeneratorFS: React.FC = () => {
    return (
        <div className="generator-fs">
            <div className="generator-fs__inputs">

                <InputNumber name="q" label="количество чисел" defaultValue="1" 
                    step={1} min={1} max={10} />
                <InputNumber name="w" label="количество цифр" defaultValue="1" 
                    step={1} min={1} max={10} />
                <InputNumber name="e" label="Скорость, сек." defaultValue="1" 
                    step={1} min={1} max={10} />
            </div>

            <DefaultButton className="generator-fs__btn-start"
                text="Начать" maxwidth="475px" padding="15px 100px" bg="#97CE4E" color="#FFFFFF" bgHover="green" colorHover="#FFFFFF" isHover={false} />
        </div>
    )
}


export default GeneratorFS