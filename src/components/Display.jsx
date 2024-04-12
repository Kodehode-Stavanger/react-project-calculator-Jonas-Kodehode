import styles from "./Display.module.css"

export default function Display({input, result}) {
    
    return (
        <div className={styles.display}>
            <h1 className={styles.inputResult}>{input}</h1>
            <h2 className={styles.inputResult}>{result}</h2>
        </div>
    )
}