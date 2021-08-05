import React, { useState, useEffect} from 'react'
import MainLayout from '../core/MainLayout'
import ProductService from '../service/product'
import { getAll, removeCookie } from '../components/Helpers'
import { Link } from 'react-router-dom'

export default function SavedProduct() {

    const [products, setProducts] = useState([])

    useEffect(() => {
            const savedProduct = getAll();
            Object.keys(savedProduct).map(async(key) => {
                console.log(key);
                const product = await ProductService.getProductDetail(key);
                setProducts(products => [...products, product]);
            });
        
    }, []);

    const refresh = () => {
        setProducts([])
        const savedProduct = getAll();
        Object.keys(savedProduct).map(async(key) => {
            console.log(key);
            const product = await ProductService.getProductDetail(key);
            setProducts(products => [...products, product]);
        });
    }
    return (
        <MainLayout>
            {
                products.map((product,i) =>(
                    <div className="relative flex border bg-gray-100 p-5 rounded-md mx-10 mt-4 mx-w-md" key={i}>
                        <img className="w-16 h-20" src={`http://147.182.212.103:8000/public/uploads/${product.photosSourceArray[0]}`} alt=""/>
                        <div className="ml-3">
                            <Link className="uppercase" to={`product/${product._id}`}>{product.product_name}</Link>
                            <p className="text-blue-600">{product.product_code}</p>
                            <div onClick={() => { removeCookie(product._id); refresh() }} className="text-red-800 p-1 rounded-md mt-3">
                                Listeden Çıkart
                            </div>
                        </div>
                
                    </div>
                ))
            }
        </MainLayout>
    )
}
