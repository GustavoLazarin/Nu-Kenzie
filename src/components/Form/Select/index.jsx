export const Select = ({name, value, setValue}) => {
    return (
        <div>
            <label htmlFor={name}>Tipo de valor</label>
            <select name={name} id={name} value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="" disabled>Selecione uma opção</option>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Despesa</option>
            </select>
        </div>
    )
}