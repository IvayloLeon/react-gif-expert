export const getGifs = async(category) => {
    const api_key = 'AtnQ4yMXJR279XiEvUe8bM6wiXdMGmWs'
    const limit = 10
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map((img) => ({
        url: img.images.original.url,
        id: img.id,
        title: img.title
    }))

    return gifs;
}