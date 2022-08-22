import { getGifs } from "../../src/Helpers/getGifs";

test('Debe de retornar un arreglo de gifs', async() => { 
    const gifs = await getGifs('CR7')

    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
    })

});