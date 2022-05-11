import React from 'react'
import { Button, Card } from 'react-bootstrap'

const SingleInventory = ({ product }) => {
    // const { name } = product || {}

    const { Price, description, quantity, supliarName, name, img } = product || {}

    return (
        <div className='col-lg-4'>
            <Card className='mx-auto' style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h4>Price: ${Price}</h4>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Stock Update</Button>
                    <Button className='ms-3' variant="primary">Delete Product</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleInventory