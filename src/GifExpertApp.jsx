import { useState } from "react"
import { AddCategory, GifGrid } from "./Components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategory = (newCategory) => {
    if(categories.some(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
          // setCategories={setCategories} 
          onNewCategory={event => onAddCategory(event)}
        />

        {
          categories.map(cat => (  
            <GifGrid key={cat} category={cat} />
          ))
        }
    </>
  )
}
