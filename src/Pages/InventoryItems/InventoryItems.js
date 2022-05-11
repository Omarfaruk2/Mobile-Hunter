import React from 'react'
import InvertoryHooks from '../hooks/InvertoryHooks'
// import ManageAllProducts from '../ManageAllProducts/ManageAllProducts'
import ManageButton from '../ManageAllProducts/ManageButton'
import SingleInventory from '../SingleInventory/SingleInventory'

const InventoryItems = () => {

    const [products] = InvertoryHooks()

    return (
        <div>
            <h3 className='text-center mt-3'>OUR INVENTORY ITEMS </h3>
            <h2>Products : {products?.length}</h2>
            <div className='row m-0 p-0'>
                {
                    products?.slice(0, 6)?.map(product => <SingleInventory
                        product={product}
                        key={product?.id}
                    ></SingleInventory>)
                }
                <ManageButton></ManageButton>
            </div>
        </div>
    )
}

export default InventoryItems