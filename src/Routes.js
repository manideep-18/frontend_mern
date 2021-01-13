import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import AddCategory from './admin/AddCategory'
import { ManageCategories } from './admin/ManageCategories'
import { AdminRoute } from './auth/helper/AdminRoutes'
import { PrivateRoute } from './auth/helper/PrivateRoutes'

import Home from './core/Home'
import AdminDashboard from './user/AdminDashBoard'
import Signin from './user/Signin'
import Signup from './user/Signup'
import UserDashboard from './user/UserDashBoard'

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/signin" component={Signin}/>
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                <AdminRoute path="/admin/create/category" exact component={AddCategory}/>
                <AdminRoute path="/admin/categories" exact component={ManageCategories}/>
            </Switch>
        </Router>
    )
}