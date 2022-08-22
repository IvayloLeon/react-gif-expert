import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from '../../src/Hooks/useFetchGifs'

jest.mock('../../src/Hooks/useFetchGifs')

const category = 'Dragon Ball'

test('Debe de mostrar el loading inicialmente', () => { 

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    })

    render(<GifGrid category={category} />)
    expect(screen.getAllByText('Cargando...'));
    expect(screen.getAllByText(category));

});

test('Debe de mostrar items cuando se cargan las imágenes mediante el useFetchGifs', () => { 
    
    const gifs = [
        {
            id: 'ABC',
            title: 'Goku',
            url: 'https://goku.png'
        },
        {
            id: 'CBA',
            title: 'Vegetta',
            url: 'https://vegeta.png'
        }
    ]

    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
    })

    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(2)
    expect(screen.getByText('Goku'))    
    

});