import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import AddCategory from './admin/AddCategory'
import { AddProduct } from './admin/AddProduct'
import { AdminRoute } from './auth/helper/AdminRoutes'
import { PrivateRoute } from './auth/helper/PrivateRoutes'

import Home from './core/Home'
import AdminDashboard from './user/AdminDashBoard'
import Signin from './user/Signin'
import Signup from './user/Signup'
import UserDashboard from './user/UserDashBoard'
import ManageProducts from './admin/ManageProducts'
import UpdateProduct from './admin/UpdateProduct'
import ManageCategories from './admin/ManageCategories'
import UpdateCategory from './admin/updateCategory'
import Cart from './core/Cart'


export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/cart" component={Cart}/>
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                <AdminRoute path="/admin/create/category" exact component={AddCategory}/>
                <AdminRoute path="/admin/categories" exact component={ManageCategories}/>
                <AdminRoute path="/admin/create/product" exact component={AddProduct}/>
                <AdminRoute path="/admin/products" exact component={ManageProducts}/>
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct}/>
                <AdminRoute path="/admin/category/:categoryId/:userId" exact component={UpdateCategory}/>
            </Switch>
        </Router>
    )
}