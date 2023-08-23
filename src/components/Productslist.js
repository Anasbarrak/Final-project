import React from 'react'
import Productscards from './Productscards'
import products from './Data'

function Productslist() {
  console.log(products)
  return (
    <div>
      {products.map((e) => <Productscards products={products}/>)}
    </div>
  )
}

export default Productslist
