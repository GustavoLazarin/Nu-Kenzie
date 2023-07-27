import styles from "./style.module.scss"

export const List = ({children}) => {
    return (
        <div className={styles.financesSumary}>
            <h3 className="title3">Resumo financeiro</h3>
            <ul className={styles.cardsList}>
                {children}
            </ul>
        </div>
    )
}