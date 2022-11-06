import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One Punch Man',])
    const addCategory = (new_category) => {
        setCategories([new_category,...categories])
    }

    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory addCategory={addCategory}/>
        <hr/>
        <ul>
            {categories.map( category => (
                <GifGrid key={category} category={category}/>
            ))}
        </ul>
    </>
  )
}

export default GifExpertApp