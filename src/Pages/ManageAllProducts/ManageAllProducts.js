
import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ManageAllProducts = ({ product }) => {
    // const { name } = product || {}
    // console.log(product)
    const { Price, description, quantity, supliarName, name, img } = product || {}

    return (
        <div className='col-lg-4'>
            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h4>Price: ${Price}</h4>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ManageAllProducts