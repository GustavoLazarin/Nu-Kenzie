import logo from "../../assets/nuKenzie-logo.svg"
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="nuKenzie Logo" />
        </header>
    )
}