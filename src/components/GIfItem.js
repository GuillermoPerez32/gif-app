import React from 'react'

const GIfItem = ({title, url}) => {
  return (
    <a href={url}>
        <div className='card animate__animated animate__fadeIn'>
        <div className='img-container'>
            <img src={url}></img>
        </div>
        <h4>{title}</h4>
    </div>
    </a>
  )
}

export default GIfItem