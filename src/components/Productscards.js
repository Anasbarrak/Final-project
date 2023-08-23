import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Productscards({products}){
  console.log(products)
  return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={products.image} style={{height:"320px"}}/>
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
        <Card.Text>{products.description}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Productscards;