import logo from "../../assets/nuKenzie-logo.svg"
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src={logo} alt="nuKenzie Logo" />
            </div>
        </header>
    )
}