import { useState } from "react"
import { Form } from "../../Form"
import { List } from "../../List"
import { Card } from "../../List/Card"
import { TotalMoney } from "../../TotalMoney"
import styles from "./style.module.scss"

export const FinancesSection = () => {

    const [financesList, setFinancesList] = useState([])

    const addCard = (newCard) => {
        setFinancesList([...financesList, newCard])
    }

    const removeCard = (cardID) => {
        const filteredList = financesList.filter(card => card.id !== cardID);
        setFinancesList(filteredList)
    }

    return (
        <section className={styles.financesSection}>
            <div className={styles.formBox}>
                <Form addCard={addCard}/>
                {financesList.length > 0 ? <TotalMoney list={financesList}/> : null}
            </div>
            <div className={styles.cardsBox}>
                <List>
                    {financesList.length > 0 ? financesList.map(card => <Card key={card.id} id={card.id} description={card.description} valueType={card.valueType} amount={card.amount} removeCard={removeCard}/>)
                    : <h2 className="title2">Você ainda não possui nenhum lançamento</h2>}
                </List>
            </div>
        </section>
    )
}