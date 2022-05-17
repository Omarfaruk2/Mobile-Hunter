import { useEffect, useState } from 'react'

const useInventory = () => {
    const [products, setProducs] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/inventory")
            .then(res => res.json())
            .then(data => setProducs(data))
    }, [products])

    return [products, setProducs]
}

export default useInventory

