import { useState } from "react"
import { Form } from "../../Form"
import { List } from "../../List"
import { Card } from "../../List/Card"
import { TotalMoney } from "../../TotalMoney"
import styles from "./style.module.scss"

export const FinancesSection = () => {

    const [financesList, setFinancesList] = useState([{description: "Aluguel", valueType: "Entrada", amount:7000}])

    return (
        <section className={styles.financesSection}>
            <div className={styles.formBox}>
                <Form cardsList={financesList} setCardsList={setFinancesList}/>
                {financesList.length > 0 ? <TotalMoney list={financesList}/> : null}
            </div>
            <div className={styles.cardsBox}>
                <List>                                               {/* console.log ALTERAR A KEYY!*/}
                    {financesList.length > 0 ? financesList.map(card => <Card key={card.description} description={card.description} valueType={card.valueType} amount={card.amount} />)
                    : <h2 className="title2">Você ainda não possui nenhum lançamento</h2>}
                </List>
            </div>
        </section>
    )
}