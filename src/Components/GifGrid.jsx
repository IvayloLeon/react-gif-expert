import { useEffect, useState } from "react";
// import { getGifs } from "../Helpers/getGifs"
import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

    const {isLoading, images} = useFetchGifs(category)

    return (
        <>
            <p>{category}</p>
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
