import { useEffect, useState } from 'react'

const InvertoryHooks = () => {

    const [products, setProducs] = useState([])

    useEffect(() => {
        fetch("product.json")
            .then(res => res?.json())
            .then(data => setProducs(data))
    }, [])

    return [products, setProducs]
}

export default InvertoryHooks