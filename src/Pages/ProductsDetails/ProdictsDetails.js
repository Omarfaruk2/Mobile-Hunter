import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import useProductsDetails from '../hooks/useProductsDetails'
import "./Products.css"
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const ProdictsDetails = () => {

    const [user, loading, error] = useAuthState(auth)

    const { id } = useParams()
    const [product, setProduct] = useProductsDetails(id)
    const { name, img, Price, description, _id, quantity } = product



    if (!product || loading) {

        return (
            <div className='loginSpiner g-3'>
                <Spinner className='mx-2' animation="grow" variant="primary" />
                <Spinner className='mx-2' animation="grow" variant="info" />
                <Spinner className='mx-2' animation="grow" variant="warning" />
            </div>
        )
    }

    const handleDelivered = (id) => {
        const fieldQuantity = product.quantity
        const addQuantity = fieldQuantity - 1
        const updateQuantity = { addQuantity }
        const url = `https://enigmatic-forest-42494.herokuapp.com/inventory/${id}`

        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateQuantity)
        })
            .then((res) => res.json())
            .then(data => {
                const quantity = updateQuantity.addQuantity
                const newProduct = { ...product, quantity }
                setProduct(newProduct)
            })

    }

    const handleQuantitySubmit = (event) => {

        event.preventDefault()
        const fieldQuantity = parseInt(product.quantity)
        const inputQuantity = parseInt(event.target.updatequantity.value)
        const addQuantity = parseInt(inputQuantity) + parseInt(fieldQuantity)
        const updateQuantity = { addQuantity }

        const url = `https://enigmatic-forest-42494.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateQuantity)

        })

            .then((res) => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const quantity = updateQuantity.addQuantity
                    const newProduct = { ...product, quantity }


                    setProduct(newProduct)
                    event.target.reset()
                }
            })
    }


    return (
        <>

            <Card className='mx-auto px-3 mt-4' style={{ width: '20rem' }}>
                <Card.Img variant="top" className='w-100' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h4>Price: ${Price}</h4>
                    <h4>Quantity: {quantity}</h4>
                    <Card.Text>
                        <b>Description</b>:{description}
                    </Card.Text>
                    <Button className='w-100' onClick={() => handleDelivered(_id)} variant="outline-secondary">Delivired Items</Button>
                </Card.Body>
            </Card>

            <div className='text-center'>
                <h3 >Update your product quantity</h3>

                <form onSubmit={handleQuantitySubmit}>
                    <div className="mb-3 form-check">
                        <input type="number" name="updatequantity" id="" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>


        </>
    )
}

export default ProdictsDetails




// const fieldQuantity = product.quantity
// const addQuantity = fieldQuantity - 1
// const updateQuantity = { addQuantity }
// const url = `https://enigmatic-forest-42494.herokuapp.com/inventory/${id}`
// // console.log(url)
// fetch(url, {
//     method: "PUT",
//     headers: {
//         "content-type": "application/json",
//     },
//     body: JSON.stringify(updateQuantity)
// })
//     .then((res) => res.json())
//     .then(data => {
//         const quantity = updateQuantity.addQuantity
//         const newProduct = {...product, quantity }
//         setProduct(newProduct)

//     })
// console.log(product.quantity, "gg")