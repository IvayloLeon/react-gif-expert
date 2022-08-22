import PropTypes from 'prop-types'
import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ category }) => {

    const {isLoading, images} = useFetchGifs(category)

    return (
        <>
            <h4>{category}</h4>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {images.map((img) => (
                    <GifGridItem 
                        key={img.id} 
                        {...img}
                    />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}