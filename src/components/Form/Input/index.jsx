export const Input = ({type, name, label, placeholder}) => {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} />
        </div>
    )
}