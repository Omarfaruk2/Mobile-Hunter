import React from 'react'
import { useNavigate } from 'react-router-dom'


const ManageButton = () => {
    const navigate = useNavigate()

    const handleAll = () => {
        navigate("/inventory")
    }

    return (
        <div className='w-100'>
            <button onClick={handleAll} className='btn btn-primary text-end'>All Prodicts</button>
        </div>
    )
}

export default ManageButton