import React from 'react'
import Productscards from './Productscards'
import data from 'Data.js' 

function Productslist() {
  console.log(data)
  return (
    <div>
      {data.map((e) => <Productscards data={data}/>)}
    </div>
  )
}

export default Productslist
