import React from 'react'
import {Link} from 'react-router-dom'

const CreateProductButton = () => {
    return (
        <>
            <Link 
                to="/addProduct" 
                className="btn btn-lg btn-info"
            >
                Create a Product
            </Link>
        </>
    )
}

export default CreateProductButton
