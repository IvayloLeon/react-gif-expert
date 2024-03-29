import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1) return;

        // setCategories(cats => [inputValue, ...cats])
        onNewCategory(inputValue.trim());
        setInputValue('')
    }
  
    return (
    <form onSubmit={(e) => onSubmit(e)} aria-label='form'>
        <input 
            type="text" 
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={(e) => onInputChange(e)}
        />

        {/* <input type="submit" value='Agregar' /> */}
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}