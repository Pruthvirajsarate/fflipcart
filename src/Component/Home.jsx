import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark">
                <img src="/Image/market.jpg" className="card-img" alt="Background" height='550px' />
                <div className='container'>
                    
                 
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">
                         CHECK OUT ALL THE TRENDS
                    </p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}
