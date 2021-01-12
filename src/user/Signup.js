import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { signup } from '../auth/helper'
import Base from '../core/Base'

export const Signup=()=>{

    const [values,setValues] = useState({
        name:'',
        email:'',
        pasword:'',
        error:'',
        success:false
    })

    const {name,email,pasword,error,success} =values

    const handleChange = name = event =>{
        setValues({...values,error:false,[name]:event.target.value})
    }


    const onSubmit = (event) =>{
        event.preventDefault()
        setValues({...values,error:false})
        signup({name,email,pasword})
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error,success:false})
            }else{
                setValues({...values,name:"",email:"",pasword:"",error:"",success:true})
            }
        })
    }

    const SignupForm=()=>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input className="form-control" type="text" onChange={handleChange('name')}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" type="email" onChange={handleChange('email')}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" type="password" onChange={handleChange('password')}/>
                        </div>
                        <button className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <Base title="Sign up page" description="A page for user to sign up!">
            {SignupForm()}
        </Base>
    )
}

export default Signup