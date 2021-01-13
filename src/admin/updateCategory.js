import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { createaProduct, getCategories,getaCategory,updateCategory } from './helper/adminapicall'

const UpdateCategory = ({match}) =>{

    const {user,token} = isAuthenticated()

    const [values,setValues] = useState({
        name:"",
        loading:false,
        error:"",
        createdProduct:"",
        getaRedirect:false,
        formData:""
    })

    const {name,loading,error,createdProduct,getaRedirect,formData} = values

    const preload = (productId) =>{
        getaCategory(productId)
        .then(data =>{
            if(data.error){
                setValues({...values,error:data.error})
            }else{
                setValues({
                    ...values,
                    name:data.name,
                    formData:new FormData()
                })
            }
        })
    }



    useEffect(()=>{
        preload(match.params.categoryId)
    },[])

    const onSubmit=(event)=>{
        event.preventDefault()
        setValues({...values,error:'',loading:true})

        updateCategory(match.params.categoryId,user._id,token,{name})
        .then(data=>{
            
            if(data.error){
                setValues({...values,error:data.error})
            }
            else{
              setTimeout( ()=>{setValues({
                ...values,
                name:'',
                loading:false,
                createdProduct:data.name,
            })},2000)

            setTimeout(()=>{setValues({...values,getaRedirect:true})},3000)

            }
        })
    }

    const handleChange=name=>event=>{
        const value=name === 'photo'? event.target.files[0] : event.target.value
        formData.set(name,value)
        setValues({...values,[name]:value})
    }

    const successMessage=()=>(
        <div className="alert alert-success mt-3" style={{display: createdProduct?"":"none"}}>
            <h4>{createdProduct} created successfully</h4>
        </div>
    )

    const errorMessage=()=>{
        return (<div className="alert alert-danger mt-3" style={{display: error?"":"none"}}>
            <h4>{error} occured</h4>
        </div>)
    }

    const redirect = ()=>{
        if(getaRedirect){
            if(user && user.role === 1){
              return  (<Redirect to="/admin/dashboard"/>)
            }
            else{
               return (<Redirect to='/user/dashboard'/>)
            }
        }
    }

    const createProductForm = () => (
        <form >
          <span>Edit Category Name</span>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="name"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          
          
         
         
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success mt-4">
            Update Category
          </button>
        </form>
      );

return(
    <Base 
    title="Add a product here!" 
    description="Welcome to product creation section" 
    className="container bg-info p-4"
    >
    <Link to='/admin/dashboard' className="btn btn-md btn-dark mb-3">Admin Home</Link>
    <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
            {errorMessage()}
            {successMessage()}
            {createProductForm()}
            {redirect()}
            {loading?'submitting':''}
        </div>
    </div>
    </Base>
)
}

export default UpdateCategory