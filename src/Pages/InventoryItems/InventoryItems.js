import React from 'react'
import useInventory from '../hooks/useInventory'
// import ManageAllProducts from '../ManageAllProducts/ManageAllProducts'
import ManageButton from '../ManageAllProducts/ManageButton'
import SingleInventory from '../SingleInventory/SingleInventory'

const InventoryItems = () => {

    const [products] = useInventory()

    return (
        <div>
            <h3 className='text-center mt-3'>OUR INVENTORY ITEMS </h3>
            <h2>Products : {products.length}</h2>

            <div className='row m-0 p-0'>
                {
                    products.slice(0, 6).map(product =>
                        <SingleInventory
                            product={product}
                            key={product._id}
                        ></SingleInventory>)
                }
                <ManageButton></ManageButton>
            </div>
        </div>
    )
}

export default InventoryItems



// [
//     {
     
//         "Price":"300",
//         "description": "Samsung Galaxy A73 5G comes with 6.7 inches Full HD+ Super AMOLED Plus screen. It has a center punch-hole front camera design. The back camera is of Quad 108+12+5+5 with PDAF, OIS, ultrawide, depth sensor, dedicated macro camera etc",
//         "quantity":25,
//         "supliarName": "Samsung",
//         "name": "Samsung Galaxy A73 5G",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2022/04/Samsung-Galaxy-A73-5G.jpg"
//     },
//     {

//         "Price":"400",
//         "description": "Samsung Galaxy A53 5G comes with 6.5 inches Full HD+ Super AMOLED screen. It has a center punch-hole front camera design. The back camera is of Quad 64+12+5+5 with PDAF, OIS, ultrawide, depth sensor, ",
//         "quantity":"25",
//         "supliarName": "Samsung",
//         "name": "Samsung Galaxy A53 5G",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2022/03/Samsung-Galaxy-A53-5G.jpg"
//     },
//     {
  
//         "Price": "22",
//         "description": "Samsung Galaxy A33 5G comes with 6.4 inches Full HD+ Super AMOLED screen. It has a waterdrop notch front camera design. The back camera is of Quad 48+8+5+2 with PDAF, OIS, ultrawide, depth sensor, dedicated macro camera etc.",
//         "quantity":"28",
//         "supliarName": "Samsung",
//         "name": "Samsung Galaxy A33 5G",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2022/03/Samsung-Galaxy-A33-5G.jpg"
//     },
//     {
   
//         "Price": "22",
//         "description": "Oppo A16e comes with 6.52 inches HD+ screen. It has a Full-View waterdrop notch design. The back camera is of single 13 MP with LED flash, PDAF, f/2.2 aperture etc. and Full HD video recording. The front camera is of 5 MP. ",
//         "quantity":"28",
//         "supliarName": "Oppo",
//         "name": "Oppo A16e",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2022/04/Oppo-A16e.jpg"
//     },
//     {
     
//         "Price":"40",
//         "description": "Many of the Oppo fans may ask, why choose Oppo A1K over Oppo A3s at a lower price? One reason is the trendy Waterdrop notch design of Oppo A1K. For those who find the classic notch of Oppo A3s is a bit too big, Oppo A1K is the choice",
//         "quantity": "29",
//         "supliarName": "Oppo",
//         "name": "Oppo A1K",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2020/04/Oppo-A1K-new.jpg"
//     },
//     {
       
//         "Price":"35",
//         "description": "Walton Primo GH11 comes with 6.52 inches large HD+ IPS screen. It has a full-view waterdrop notch design. The back camera is of triple 13 MP + VGA + VGA with autofocus, LED flash, f/2.0 aperture, 1/3.06″",
//         "quantity": "28",
//         "supliarName": "Walton",
//         "name": "Walton Primo GH11",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2022/04/Walton-Primo-GH11.jpg"
//     },
//     {
      
//         "Price": "23",
//         "description": "Walton Primo GM4 comes with 6.1 inches HD+ IPS screen. It has a full-view waterdrop notch design. The back camera is of dual 13 MP + VGA with PDAF, LED flash, f/2.0 aperture etc. and Full HD video recording. ",
//         "quantity": "21",
//         "supliarName": "Walton",
//         "name": "Walton Primo GM4",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2021/12/Walton-Primo-GM4-image.jpg"
//     },
//     {
      
//         "Price": "35",
//         "description": "2 GB RAM, 1.5 GHz quad-core CPU and Android 9 Pie is indeed an excellent deal for the price. Walton Primo NF4 Turbo edition is especially released to provide faster performance to low-budget consumers.",
//         "quantity": "26",
//         "supliarName": "Walton",
//         "name": "Walton Primo NF4 Turbo",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2019/08/Walton-Primo-NF4-Turbo.jpg"
//     },
//     {
      
//         "Price": "39",
//         "description": "Xiaomi Redmi 10 comes with 6.5 inches Full HD+ LCD screen. It has a center punch-hole design on the front. The display is protected by a 3rd generation Gorilla Glass. The back camera is of quad 50+8+2+2 MP with PDAF, ultrawide, depth sensor, ",
//         "quantity": "28",
//         "supliarName": "Xiaomi",
//         "name": "Xiaomi Redmi 10",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2021/10/Xiaomi-Redmi-10-image.jpg"
//     },
//     {
       
//         "Price": "33",
//         "description": "Xiaomi Redmi 10 Prime comes with 6.5 inches Full HD+ LCD screen. It has a center punch-hole design on the front. The display is protected by a 3rd generation Gorilla Glass. The back camera is of quad 50+8+2+2 MP with PDAF, ultrawide, depth sensor,",
//         "quantity": "25",
//         "supliarName": "Redmi",
//         "name": "Xiaomi Redmi 10 Prime",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2021/11/Xiaomi-Redmi-10-Prime-image.jpg"
//     },
//     {
  
//         "Price":"21",
//         "description": "Xiaomi Redmi 10 2022 comes with 6.5 inches Full HD+ LCD screen. It has a center punch-hole design on the front. The display is protected by a 3rd generation Gorilla Glass. The back camera is of quad 50+8+2+2 MP with PDAF",
//         "quantity": "23",
//         "supliarName": "Redmi",
//         "name": "Xiaomi Redmi 10 2022",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2022/02/Xiaomi-Redmi-10-2022-image.jpg"
//     },
//     {
      
//         "Price": "35",
//         "description": "Xiaomi Redmi Note 11s comes with 6.43 inches Full HD+ AMOLED screen. It has a center punch-hole design on the front. The display is protected by a 3rd generation Gorilla Glass. The back camera is of quad 50+8+2+2 MP with PDAF",
//         "quantity": "29",
//         "supliarName": "Redmi",
//         "name":"Xiaomi Redmi Note 11s",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2022/03/Xiaomi-Redmi-Note-11.jpg"
//     },
//     {
       
//         "Price": "35",
//         "description": "Xiaomi Redmi Note 11 comes with 6.43 inches Full HD+ AMOLED screen. It has a center punch-hole design on the front. The display is protected by a 3rd generation Gorilla Glass. The back camera is of quad 64+8+2+2 MP with PDAF",
//         "quantity": "21",
//         "supliarName": "Xiaomi Redmi Note 11",
//          "name":"Xiaomi Redmi Note 11",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2022/03/Xiaomi-Redmi-Note-11.jpg"
//     },
//     {
       
//         "Price": "27",
//         "description": "Xiaomi Redmi Note 10S comes with 6.43 inches Full HD+ AMOLED screen. It has a center punch-hole design on the front. The display is protected by a 3rd generation Gorilla Glass. The back camera is of quad 64+8+2+2 MP with PDAF",
//         "quantity": "26",
//         "supliarName": "",
//         "name": "Xiaomi Redmi Note 10S",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2021/06/Xiaomi-Redmi-Note-10S-image.jpg"
//     },
//     {
       
//         "Price": "40",
//         "description": "Infinix Note 12 comes with 6.7 inches Full HD+ AMOLED screen. It has a waterdrop notch front camera design. The back camera is of triple 50+2+0.3 Megapixel with PDAF, depth sensor, dedicated macro lens, quad-LED flash, HDR etc.",
//         "quantity": "20",
//         "supliarName": "INfinix",
//         "name": "Infinix Note 12",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2022/04/Infinix-Note-12.jpg"
//     },
//     {
      
//         "Price": "37",
//         "description": "Infinix Hot 11 Play comes with 6.82 inches HD+ IPS LCD screen. It has a waterdrop notch front camera design. The back camera is of triple 48+2 Megapixel + AI with PDAF, quad-LED flash, HDR etc. and Full HD video recording",
//         "quantity": "24",
//         "supliarName": "INfinix",
//         "name": "Infinix Hot 11 Play",
//         "img": "https://www.mobiledokan.com/wp-content/uploads/2021/12/Infinix-Hot-11-Play-image.jpg"
//     }
// ]
