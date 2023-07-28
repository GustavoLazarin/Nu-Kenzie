import styles from "./style.module.scss"

export const Card = ({id, description, valueType, amount, removeCard}) => {
    return (
        <li className={`${styles.financeCard} ${valueType === "Entrada" ? styles.entry : null}`}>
            <div>
                <h3>{description}</h3>
                <p>{valueType}</p>
            </div>
            <div className={styles.rightBox}>
                <p>{amount.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}</p>
                <button className="btn" onClick={() => removeCard(id)}>Excluir</button>
            </div>
        </li>
    )
}