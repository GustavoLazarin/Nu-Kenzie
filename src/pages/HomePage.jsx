import { Header } from "../components/Header"
import { Form } from "../components/Form"
import { List } from "../components/List"
import { Card } from "../components/List/Card"
import { TotalMoney } from "../components/TotalMoney"

export const HomePage = () => {
    const cards = [{description: "Salario - Julho", valueType: "Entrada", amount: 12000}, {description: "Fatura Cartão", valueType: "Saída", amount: 3000}, {description: "Conta Luz", valueType: "Saída", amount: 900}]
    return (
        <>
            <Header/>
            <main>
                <div className="container">
                    <div className="left-box">
                        <Form/>
                        {cards.length > 0 ? <TotalMoney totalAmount={2000}/> : null}
                    </div>
                    <div className="rigth-box">
                        <List>
                            {cards.length > 0 ? cards.map(card => <Card description={card.description} valueType={card.valueType} amount={card.amount} />)
                            : <h2 className="title2">Você ainda não possui nenhum lançamento</h2>}
                        </List>
                    </div>
                </div>
            </main>
        </>
    )
}