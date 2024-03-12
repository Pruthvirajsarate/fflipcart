import React from 'react'
import {useSelector} from 'react-redux'

export const Cart = () => {
    const state = useSelector((state)=>state.handleButton)
  return (
    <div>


        <div className='row'>
            <div className='col-md-4'>
                <img src={product.image} alt={product.title} height="200px" width='180px'></img>
            </div>
            <div className='col-md-4'>
                <h3>{product.title}</h3>
                <p className='lead fw-bold'>
                    {product.qty} X ${product.price} = $ {product.qty * product.price}
                </p>
                <button className='btn btn-outline-dark me-4' onClick={()=>handlButton(product)}>
                    <i className='fa fa-minus'></i>
                </button>
                <button className='btn btn-outline-dark' onClick={()=>handlButton(product)}>
                    <i className='fa fa-plus'></i>

                </button>

            </div>

        </div>


    </div>
  )
}
