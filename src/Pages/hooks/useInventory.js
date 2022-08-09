import React from 'react'
import useSWR from 'swr'


const url = "https://enigmatic-forest-42494.herokuapp.com/inventory"
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const useInventory = () => {

    const { data: products, isValidating, error } = useSWR(url, fetcher, {
        suspense: true,
    })

    return [products, error]
}

export default useInventory




// import { useEffect, useState } from 'react'

// const useInventory = () => {
//     const [products, setProducs] = useState([])

//     useEffect(() => {
//         fetch("https://enigmatic-forest-42494.herokuapp.com/inventory")
//             .then(res => res.json())
//             .then(data => setProducs(data))
//     }, [])

//     return [products, setProducs]
// }

// export default useInventory

