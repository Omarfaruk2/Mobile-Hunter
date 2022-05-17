import React from 'react'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import "./AddItems.css"


const AddItems = () => {
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        // console.log(data)

        const url = "http://localhost:5000/inventory"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId);
                navigate('/inventory')
            })

    }
    return (
        <div>
            <form className='d-flex flex-column w-50 mx-auto mt-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' value={user?.email} placeholder='Price' type="email" {...register("email")} readOnly />

                <input className='mb-2' placeholder='Supliar Name' type="text" {...register("supliarName")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("Price")} />
                <input className='mb-2' placeholder='photourl'  {...register("img")} />
                <input className='mb-2' type="submit" value="Add Service" />
            </form>
        </div>
    )
}

export default AddItems


