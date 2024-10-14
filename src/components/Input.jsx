import { useState } from "react"

// eslint-disable-next-line react/prop-types
const Input = ({ onChangeCallback }) => {

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);

        onChangeCallback && onChangeCallback(inputValue)
    }

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder='Type to search'
        />
    )
}

export default Input