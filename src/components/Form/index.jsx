import { useState } from "react"
import { Input } from "./Input"
import { Select } from "./Select"
import styles from "./style.module.scss"

export const Form = ({cardsList, setCardsList}) => {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    const submit = (e) => {
        e.preventDefault();

        const newCard = {
            description: description,
            amount: parseInt(amount),
            valueType: category
        }

        setCardsList([...cardsList, newCard]);

        //Reset
        setDescription("")
        setAmount("")
        setCategory("")
    }

    return (
        <form className={styles.form} onSubmit={submit}>
            <div>
                <Input type="text" name="inp-description" label="Descrição" placeholder="Digite aqui sua descrição" value={description} setValue={setDescription}/>
                <span className="paragraph">Ex: Compra de roupas</span>
            </div>
            <div>
                <Input type="number" name="inp-value" label="Valor (R$)" placeholder={0} value={amount} setValue={setAmount} />
            </div>
            <div>
                <Select value={category} setValue={setCategory}/>
            </div>
            <button className="btn primary headline">Inserir valor</button>
        </form>
    )
}