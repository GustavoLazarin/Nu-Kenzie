export const Select = ({name}) => {
    return (
        <div>
            <label htmlFor={name}>Tipo de valor</label>
            <select name={name} id={name} defaultValue="null">
                <option value="null" disabled>Selecione uma opção</option>
                <option value="entry">Entrada</option>
                <option value="output">Despesa</option>
            </select>
        </div>
    )
}