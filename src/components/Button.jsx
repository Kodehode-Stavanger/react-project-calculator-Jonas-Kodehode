

export default function Button({input, handleClick}) {
    return (
        <button value={input} onClick={handleClick}>{input}</button>
    )
}
