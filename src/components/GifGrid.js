import React, {useEffect, useState} from 'react'
import GIfItem from './GIfItem'

import useFetchGif from '../hooks/useFetchGif'
import Loading from './Loading'

function GifGrid( { category } ) {

    const {images, loading} = useFetchGif(category);
    
    return (
    <>
    <h3>{category}</h3>
    
    {loading && <Loading/>}
    
    <div>
        
    {!loading && images.map(image=> 
        <GIfItem 
        id={image.id}
        {...image}
        />
    )}
    </div>
    </>
  )
}

export default GifGrid