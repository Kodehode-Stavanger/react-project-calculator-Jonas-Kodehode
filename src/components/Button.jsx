

export default function Button({input, getValue}) {
    return (
        <button value={input} onClick={getValue}>{input}</button>
    )
}
