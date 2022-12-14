import React, { useState } from 'react'
import PropTypes from "prop-types";

const AddCategory = ({ addCategory }) => {

  const [value, setValue] = useState('')
  
  const handleChange = (e) => setValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim().length > 2) addCategory(value)
    setValue('')
  }



  return (
  <>
  <form onSubmit={handleSubmit}>
  <input type={'text'} value={value} onChange={handleChange}></input>

  </form>
  </>
  )
}

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired
}


export default AddCategory