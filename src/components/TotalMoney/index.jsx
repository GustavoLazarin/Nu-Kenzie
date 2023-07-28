import styles from "./style.module.scss"

export const TotalMoney = ({list}) => {

    const entryValues = list.filter(finance => finance.valueType === "Entrada");

    const totalAmount = entryValues.reduce((prevValue, entryCard) => prevValue + entryCard.amount, 0)

    return (
        <div className={styles.totalMoney}>
            <div>
                <h3 className="title3">Valor total:</h3>
                <h3 className="title3 primary">{totalAmount.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}</h3>
            </div>
            <p className="paragraph">O valor se refere ao saldo</p>
        </div>
    )
}