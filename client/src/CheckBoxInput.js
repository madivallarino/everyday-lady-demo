

import React, {useState } from 'react'

export default function CheckBoxInput({product, setFilteredProduct}) {
    const [filterSet, setFilterSet] = useState(false)


    function handleChange(){
      
      setFilteredProduct(product)
      setFilterSet(true)
    }
  return (
    <p> <input type="checkbox" checked={filterSet} onChange={handleChange}/> {product}</p>
  )
}
