import React from "react"
import logo from './../project-imge/logo.png'
import { Link } from "react-router-dom"

export const Navbar=()=>{
    return(
        <div className="fixed shadow-md w-full h-16 px-2 md:px-4 ">
            <div className="flex-itom-center">
                <Link to="/" >
                <img src={logo} className="h-12 wd-10px" />
                </Link>
            </div>
        </div>
    )
}