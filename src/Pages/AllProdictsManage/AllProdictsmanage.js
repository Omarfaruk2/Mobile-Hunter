import React from 'react'
import InvertoryHooks from '../hooks/InvertoryHooks'
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts'

const AllProdictsmanage = () => {
    const [products] = InvertoryHooks()
    console.log(products)
    return (
        <div>

            <h2>Products : {products?.length}</h2>
            <div className='row m-0 p-0'>
                {
                    products?.map(product => <ManageAllProducts
                        product={product}
                        key={product?.id}
                    ></ManageAllProducts>)
                }

            </div>
        </div>
    )
}

export default AllProdictsmanage