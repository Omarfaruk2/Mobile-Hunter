import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingleInventory = ({ product }) => {
    const navigate = useNavigate()

    const { Price, description, quantity, supliarName, name, img, _id } = product || {}

    const handleDetails = (id) => {
        navigate(`/inventory/${id}`)

    }

    return (
        <div className='col-lg-4'>
            <Card className='mx-auto' style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h4>Price: ${Price}</h4>
                    <h4>SupliarName: {supliarName}</h4>
                    <h4>Quantity: {quantity}</h4>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button className='w-100' variant="outline-info" onClick={() => handleDetails(_id)}>Stock Update</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleInventory