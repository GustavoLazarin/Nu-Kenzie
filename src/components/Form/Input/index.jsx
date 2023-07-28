import { useState } from "react"

export const Input = ({type, name, label, placeholder, value, setValue}) => {

    return (
        <div>
            <label htmlFor="">{label}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} required value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}