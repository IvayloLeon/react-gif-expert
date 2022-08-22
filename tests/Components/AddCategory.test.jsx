import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/Components/AddCategory";

test('Debe de cambiar el valor de la caja de texto', () => { 
    render(<AddCategory onNewCategory={() => {}} />)
    
    const input = screen.getByRole('textbox');
    
    fireEvent.input(input, { target: {value: 'Dragon Ball'} })
    
    expect(input.value).toBe('Dragon Ball')

});

test('El formulario debe de llamar onNewCategory si el input tiene un valor', () => { 
    const onNewCategory = jest.fn()
    const inputValue = 'Dragon Ball'

    render(<AddCategory onNewCategory={onNewCategory} /> );
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    
    fireEvent.input(input, {target: {value: inputValue}})
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalled()

});

test('No debe de llamar onNewCategory si el input está vacío', () => { 
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} /> );
    
    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(onNewCategory).not.toHaveBeenCalled()
});