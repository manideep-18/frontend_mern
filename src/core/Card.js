import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { addItemToCart } from './helper/cartHelper';
import ImageHelper from './helper/ImageHelper';

const Card = ({product,addtoCart = true,removefromCart=false}) => {

    const [redirect,setRedirect]=useState(false)

    const cardTitle=product ? product.name:'A photo from pexels'
    const cardDescription=product ? product.description:'this photo looks great'
    const cardPrice=product ? product.price:'$ 5'

    const addToCart=()=>{
        addItemToCart(product,()=>setRedirect(true))
    }

    const getARedirect = (redirect)=>{
        if(redirect){
            return <Redirect to='/cart'/>
        }
    }

    const showAddtoCard =(addtoCart)=>{
        return (addtoCart &&  
        <button
            onClick={addToCart}
            className="btn btn-block btn-outline-success mt-2 mb-2"
          >
            Add to Cart
          </button>)
    }

    const showRemovefromCard =(removefromCart)=>{
        return (removefromCart &&
            <button
            onClick={() => {}}
            className="btn btn-block btn-outline-danger mt-2 mb-2"
          >
            Remove from cart
          </button>
            )
    }

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cardTitle}</div>
        <div className="card-body">
            {getARedirect(redirect)}
         <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cardDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">{cardPrice}</p>
          <div className="row">
            <div className="col-12">
             {showAddtoCard(addtoCart)}
            </div>
            <div className="col-12">
             {showRemovefromCard(removefromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card