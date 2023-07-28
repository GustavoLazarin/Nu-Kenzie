import { useState } from "react"
import { Input } from "./Input"
import { Select } from "./Select"
import styles from "./style.module.scss"

export const Form = ({addCard}) => {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [selectClass, setSelectClass] = useState("") ;

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCard = {
            description: description,
            amount: parseFloat(amount),
            valueType: category,
            id: crypto.randomUUID()
        }

        newCard.valueType !== ""? (
            addCard(newCard),

            //Reset
            setDescription(""),
            setAmount(""),
            setCategory(""),
            setSelectClass("")
            ) : (
                setSelectClass("empty-alert")
            )   
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <Input type="text" name="inp-description" label="Descrição" placeholder="Digite aqui sua descrição" value={description} setValue={setDescription}/>
                <span className="paragraph">Ex: Compra de roupas</span>
            </div>
            <div>
                <Input type="number" name="inp-value" label="Valor (R$)" placeholder={0} value={amount} setValue={setAmount} />
            </div>
            <div>
                <Select value={category} setValue={setCategory} className={selectClass}/>
            </div>
            <button className="btn primary headline">Inserir valor</button>
        </form>
    )
}