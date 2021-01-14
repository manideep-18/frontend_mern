import React, { useEffect, useState } from 'react'

import '../styles.css'
import Base from './Base'
import Card from './Card'
import { loadCart } from './helper/cartHelper'
import {getProducts} from './helper/coreapicalls'

const Cart=()=>{
    
    const [products,setProducts] = useState([])
   

    const loadAllProducts=()=>{
        return(
            <div>
                <h2>This section is load to products</h2>
                {products.map((product,index)=>(
                    <Card key={index} product={product} addtoCart={false} removefromCart={true}/>
                ))}
            </div>
        )
    }

    useEffect(()=>{
        setProducts(loadCart())
    },[])

    return(
        <Base title="Cart Page" description="Ready to Checkout">
            <div className="row text-center">
               <div className="col-6">{loadAllProducts()}</div>
            </div>
        </Base>
    )
}

export default Cart