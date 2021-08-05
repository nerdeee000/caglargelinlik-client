import React, { useState, Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { setCookie, removeCookie, getCookie } from '../components/Helpers'
import { Heart } from '../utils/Icons'
export default function Product({ likeEvent, displayProducts }) {

    return (
        <Fragment>

                {
                    displayProducts.length === 0 ? 
                    <p className="font-medium">Üzgünüz, gösterilecek bir ürün bulunamadı.</p> : 
                    null
                }
            
                { 
                    displayProducts.map((product, index) => (

                        <div key={index} className="flex flex-col mx-1 my-5 w-1/2 flex-grow md:w-1/2 md:flex-none lg:w-1/5 lg:flex-none">
                                {
                                    product ?
                                    <Link className="bg-indigo-900 h-80" to={`/product/${product._id}`}>
                                        <img className="object-cover w-full h-full" src={`http://147.182.212.103:8000/public/uploads/${product.photosSourceArray[0]}`} alt=""/>
                                    </Link> :
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="flex animate-pulse">
                                            <span className="bg-yellow-600 w-2 h-4 rounded-l-xl mb-2"></span>
                                            <span className="bg-indigo-600 w-2 h-4 rounded-r-xl mb-2"></span>
                                        </div>
                                    </div> 
                                    
                                }
                            
                                <div>
                                    <div className="flex justify-between mt-3">
                                        <span className={"YENİ" === 'YENİ' ? "text-xs font-medium bg-yellow-400 p-1" : 'text-xs font-medium p-1 bg-red-700 text-white'}>{"YENİ"}</span>
                                        <Heart onClick={ ()=> {likeEvent(index)} } fill={getCookie(product._id, "saved") ? 'black' : 'white'}/>
                                    </div>
                                    <p className="uppercase font-medium antialiased text-sm mt-2">{product.product_name}</p>
                                </div> 
                        </div>
                    ))
                }
            
        </Fragment>
    )
}
