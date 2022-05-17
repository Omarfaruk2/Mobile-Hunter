import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const useEmailInventory = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    useEffect(() => {
        const email = user?.email
        fetch(`https://enigmatic-forest-42494.herokuapp.com/inventory?email=${email}`)
            .then(res => res.json())
            .then(data => setItems(data))
        // console.log(data)
    }, [user])

    return [items, setItems]
}

export default useEmailInventory