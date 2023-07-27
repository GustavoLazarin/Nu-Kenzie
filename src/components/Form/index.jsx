import { Input } from "./Input"
import { Select } from "./Select"
import styles from "./style.module.scss"

export const Form = () => {
    return (
        <form className={styles.form}>
            <div>
                <Input type="text" name="inp-description" label="Descrição" placeholder="Digite aqui sua descrição"/>
                <span className="paragraph">Ex: Compra de roupas</span>
            </div>
            <div>
                <Input type="number" name="inp-value" label="Valor (R$)" placeholder={0}/>
            </div>
            <div>
                <Select/>
            </div>
            <button className="btn primary headline">Inserir valor</button>
        </form>
    )
}