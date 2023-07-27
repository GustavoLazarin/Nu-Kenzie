import { Form } from "../../Form"
import { List } from "../../List"
import { Card } from "../../List/Card"
import { TotalMoney } from "../../TotalMoney"
import styles from "./style.module.scss"

export const FinancesSection = () => {
    const cards = [{description: "Salario - Julho", valueType: "Entrada", amount: 12000}, {description: "Fatura Cartão", valueType: "Saída", amount: 3000}, {description: "Conta Luz", valueType: "Saída", amount: 900}]

    return (
        <section className={styles.financesSection}>
            <div className={styles.formBox}>
                <Form/>
                {cards.length > 0 ? <TotalMoney totalAmount={2000}/> : null}
            </div>
            <div className={styles.cardsBox}>
                <List>
                    {cards.length > 0 ? cards.map(card => <Card description={card.description} valueType={card.valueType} amount={card.amount} />)
                    : <h2 className="title2">Você ainda não possui nenhum lançamento</h2>}
                </List>
            </div>
        </section>
    )
}