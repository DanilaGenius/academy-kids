import "./FlashAnzanAS.scss"
import InputNumber from "../../InputNumber/InputNumber"
import InputSelect from "../../InputSelect/InputSelect"
import DefaultButton from "../../DefaultButton/DefaultButton"
import InputToggle from "../../InputToggle/InputToggle"
import InputsRadio from "src/components/InputsRadio/InputsRadio.tsx"
import InputNumberBlocks from "src/components/InputNumberBlocks/InputNumberBlocks.tsx"


const FlashAnzanAS: React.FC = () => {
    return (
        <div className="flashanzan-as">
            <div className="flashanzan-as__inputs">
                <InputSelect name="g" label="Модуль"/>
                <InputNumberBlocks />
            </div>

            <div className="flashanzan-as__inputs">
                <div>
                    <InputsRadio title="Метод" arrNamesRatio={["На абакусе", "Ментально"]}/>
                </div>
                <InputSelect name="g" label="Операции"/>
                <InputSelect name="g" label="Разряды"/>
            </div>

            <div className="flashanzan-as__inputs">
                    <InputNumber name="e" label="количество цифр" defaultValue="1" 
                    step={1} min={1} max={10} />
                    <InputNumber name="e" label="Прогресс" defaultValue="1" 
                    step={1} min={1} max={10} />
                    <InputNumber name="e" label="Учеличить / уменьшить" defaultValue="1" 
                    step={1} min={1} max={10} />
            </div>

            <div className="flashanzan-as__inputs">
                    <InputNumber name="e" label="Количество слагаемых" defaultValue="1" 
                    step={1} min={1} max={10} />
                    <InputNumber name="e" label="Прогресс" defaultValue="1" 
                    step={1} min={1} max={10} />
                    <InputNumber name="e" label="Учеличить / уменьшить" defaultValue="1" 
                    step={1} min={1} max={10} />
            </div>

            <div className="flashanzan-as__inputs">
                    <InputNumber name="e" label="Время, сек." defaultValue="1" 
                    step={1} min={1} max={10} />
                    <InputNumber name="e" label="Прогресс" defaultValue="1" 
                    step={1} min={1} max={10} />
                    <InputNumber name="e" label="Учеличить / уменьшить" defaultValue="1" 
                    step={1} min={1} max={10} />
            </div>

            <div className="flashanzan-as__inputs">
                Количество увеличится/уменьшится если было правильно выполнено то количество примеров, указанное в прогрессе.
                Прогресс не будет работать если будут играть больше одного игрока.
            </div>

            <div className="flashanzan-as__inputs">
                <InputSelect name="g" label="Чередование цифр"/>
                <InputSelect name="g" label="Все"/>
                <InputSelect name="g" label="50+"/>
            </div>

            <div className="flashanzan-as__inputs">
                <InputSelect name="g" label="100+"/>
                <InputSelect name="g" label="Знак"/>
                <InputSelect name="g" label="Дробь"/>
            </div>

            <div className="flashanzan-as__inputs">
                <InputToggle className="mr-6" title="Режим разброса"/>
                <InputToggle className="mr-6" title="Режим диктанта"/>
                <InputToggle title="Голосовой диктант"/>
            </div>

            <div className="flashanzan-as__inputs">
                    <InputNumber name="e" label="количество" defaultValue="1" 
                    step={1} min={1} max={10} />
                    <InputNumber name="e" label="Время на ответ, мин" defaultValue="1" 
                    step={1} min={1} max={10} />
                    <div className="w-full"></div>
            </div>

            <DefaultButton className="flashanzan-as__btn-start"
             text="Начать" maxwidth="100%" padding="15px 100px" bg="#97CE4E" color="#FFFFFF" bgHover="green" colorHover="#FFFFFF" isHover={false} />
        </div>
    )
}

export default FlashAnzanAS