import styles from "./Display.module.css"

export default function Display({input, result}) {
    
    return (
        <div className={styles.display}>
            <h1 className={styles.input}>{input}</h1>
            <h2 className={styles.result}>{result}</h2>
        </div>
    )
}