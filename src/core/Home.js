import React from 'react'
import '../styles.css'

export default function Home(){
    console.log("API is",process.env.REACT_APP_BACKEND)
    return(
        <div>
            <h1 className="text-white">Hello front end</h1>
        </div>
    )
}