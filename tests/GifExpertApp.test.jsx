import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

test('No debería añadir el mismo elemento repetido', () => { 
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, {target: {value: 'Dragon Ball'}})
    fireEvent.submit(form)

    fireEvent.input(input, {target: {value: 'Dragon Ball'}})
    fireEvent.submit(form)

    expect(screen.getAllByRole('heading', {level: 4}).length).toBe(1)
    
});

test('Debería añadir varios elementos', () => { 
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, {target: {value: 'Dragon Ball'}})
    fireEvent.submit(form)

    fireEvent.input(input, {target: {value: 'Real Madrid'}})
    fireEvent.submit(form)

    expect(screen.getAllByRole('heading', {level: 4}).length).toBe(2)
});