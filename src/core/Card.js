import React from 'react'
import ImageHelper from './helper/ImageHelper';

const Card = ({product,addtoCart = true,removefromCart=false}) => {

    const showAddtoCard =(addtoCart)=>{
        return (addtoCart &&  
        <button
            onClick={() => {}}
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
        <div className="card-header lead">A photo from pexels</div>
        <div className="card-body">
         <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            this photo looks great
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ 5</p>
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