import React from 'react'
import InventoryItems from '../InventoryItems/InventoryItems'
import SingleInventory from '../SingleInventory/SingleInventory'
import Upcomming from '../Upcomming/Upcomming'
import "./Home.css"



const Home = () => {


    return (
        <div className='bg-light'>

            <div className='banner-section'>
                <div className="row m-0 container mx-auto">
                    <div className="col-lg-6 col-sm-12">
                        <div className='banner-text'>
                            <b> <h2>NEW PHONE TO MATCH YOUR NEW PLAN ??</h2></b>
                            <h4 >Use our low everyday casual rates or for even better value choose one of our packs or combos......</h4>
                        </div>
                        <button className='btn btn-warning mt-3'>More Details <span className='fw-bold'>→</span> </button>
                    </div>

                </div>
            </div>
            <InventoryItems></InventoryItems>
            {/* <SingleInventory></SingleInventory> */}
            <Upcomming></Upcomming>


        </div>




    )
}

export default Home