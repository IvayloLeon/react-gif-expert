import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/Components/GifGridItem";

const title = 'Título'
const url = 'https://wallpaperaccess.com/full/1292603.jpg'


test('Snapshot del componente GifGridItem', () => { 

    const {container} = render(<GifGridItem title={title} url={url} />)

    expect(container).toMatchSnapshot();

});

test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 

    render(<GifGridItem title={title} url={url} />)
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url)
    expect(alt).toBe(title)

});

test('Debe de mostrar el título en el componente', () => {
    render(<GifGridItem title={title} url={url} />)

    expect(screen.getByText(title)).toBeTruthy()
});