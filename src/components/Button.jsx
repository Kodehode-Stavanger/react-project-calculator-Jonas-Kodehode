

export default function Button({input, handleClick, styles}) {
    return (
        <button className={styles} value={input} onClick={handleClick}>{input}</button>
    )
}
