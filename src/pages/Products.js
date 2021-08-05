import React, { useState, useEffect } from 'react'
import MainLayout from '../core/MainLayout'
import ProductList from '../components/ProductList'
import ProductService from '../service/product'
import { NavLink } from 'react-router-dom'
import { setCookie, removeCookie, getCookie } from '../components/Helpers'
export default function Products() {

    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect(() => {
        const init = async() => {
            const productList = await ProductService.getProduct();
            await setProducts(productList)
            await setDisplayProducts(productList)
        }
        init();
    }, [])

    const likeEvent = (index) => {
        const productso = [...products];
        const product = {...products[index]};
        product.isLike = !product.isLike;
        productso[index] = product;
        setProducts(productso)
        if(getCookie(products[index]._id, "saved")){
            removeCookie(products[index]._id)
        }else{
            setCookie(products[index]._id, "saved")
        }
    }

    const selectFilter = (filterName) => {
        const searchFilters = products.filter((product)=>{
            if( filterName === ""){
                return product;
            } else if( product.product_type.includes(filterName)) {
                return product;
            }
        });
        setDisplayProducts(searchFilters)
        console.log(searchFilters)
    }

    return (
        <MainLayout>
            <div className="flex justify-center mx-1 mt-5 overflow-x-auto">
                <div onClick={()=>{selectFilter("Gelinlik")}} style={{width:"120px", height:"160px"}} className="flex flex-col items-center ml-3">
                    <img className="rounded-md object-cover w-full h-24" src={`http://localhost:8000/public/uploads/bride-1.0.jpeg`} alt=""/>
                    <p className="font-light">GELİNLİK <br/> REYONU</p>
                </div>
                <div onClick={()=>{selectFilter("Nişanlık")}} style={{width:"120px", height:"160px"}} className="flex flex-col items-center ml-3">
                    <img className="rounded-md object-cover w-full h-24" src={`http://localhost:8000/public/uploads/engagement-2.0.jpeg`} alt=""/>
                    <p className="font-light">NİŞANLIK <br/> REYONU</p>
                </div>
                <div onClick={()=>{selectFilter("Bindallı")}} style={{width:"120px", height:"160px"}} className="flex flex-col items-center ml-3">
                    <img className="rounded-md object-cover w-full h-24" src={`http://localhost:8000/public/uploads/henna-1.2.jpeg`} alt=""/>
                    <p className="font-light">BİNDALLI <br/> REYONU</p>
                </div>
                <div onClick={()=>{selectFilter("Aksesuar")}} style={{width:"120px", height:"160px"}} className="flex flex-col items-center ml-3">
                    <img className="rounded-md object-cover w-full h-24" src={`http://localhost:8000/public/uploads/aksesuar.jpeg`} alt=""/>
                    <p className="font-light">AKSESUAR <br/> REYONU</p>
                </div>
            </div>
            
            <div className="flex justify-center my-3 flex-wrap">
                <ProductList displayProducts = { displayProducts } products = { products } likeEvent = { likeEvent }/>
            </div>
        </MainLayout>
    )
}
