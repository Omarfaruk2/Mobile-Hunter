import React from 'react'
import useInventory from '../hooks/useInventory'
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts'

const AllProdictsmanage = () => {
    const [products] = useInventory()
    // console.log(products)
    return (
        <div>

            <h2>Products : {products.length}</h2>
            <div className='row m-0 p-0'>
                {
                    products.map(product => <ManageAllProducts
                        product={product}
                        key={product?._id}
                    ></ManageAllProducts>)
                }

            </div>
        </div>
    )
}

export default AllProdictsmanage