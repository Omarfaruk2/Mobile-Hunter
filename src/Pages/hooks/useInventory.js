import { useEffect, useState } from 'react'

const useInventory = () => {
    const [products, setProducs] = useState([])

    useEffect(() => {
        fetch("https://enigmatic-forest-42494.herokuapp.com/inventory")
            .then(res => res.json())
            .then(data => setProducs(data))
    }, [])

    return [products, setProducs]
}

export default useInventory

