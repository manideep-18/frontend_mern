import React from 'react'
import {Link} from 'react-router-dom'
import Base from '../core/Base'

export const Signin=()=>{

    const SigninForm=()=>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" type="email"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" type="password"/>
                        </div>
                        <button className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <Base title="Sign in page" description="A page for user to sign in!">
            {SigninForm()}
        </Base>
    )
}

export default Signin