import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from "../../src/Hooks/useFetchGifs";

test('Debe de regresar el estado inicial', () => { 
    const {result} = renderHook(() => useFetchGifs('Dragon Ball'))
    const {images, isLoading} = result.current
    
    expect(images.length).toBe(0)
    expect(isLoading).toBe(true);
});


test('Debe retornar un arreglo de imágenes y "isLoading" en false', async() => { 
    const {result} = renderHook(() => useFetchGifs('Dragon Ball'))
    
    await waitFor(
        () => expect(result.current.images.length).toBeGreaterThan(0)
    )
    const {images, isLoading} = result.current
   
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBe(false);
});