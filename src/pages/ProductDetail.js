import React, { useEffect, useState } from 'react'
import MainLayout from '../core/MainLayout'
import Bride from '../static/img/bride-1.png'
import Rating from '../components/Rating'
import ProductService from '../service/product'
import { Whatsapp } from '../utils/Icons'
export default function ProductDetail({match}) {

    const [productDetail, setProductDetail] = useState({})
    const [productFav, setProductFav] = useState(null)
    const [productComments, setProductComments] = useState([])
    const [productProperty, setProductProperty] = useState([])
    const [useEffectPhoto, setUseEffectPhoto] = useState([])
    const [selectPhoto, setSelectPhoto] = useState("")

    const selectPhotoEvent = (index) => {
        setSelectPhoto(useEffectPhoto[index])
    }

    const shareWhatsapp = () => {
        const shareText = `http://147.182.212.103:3000/product/${match.params.id}`
        return <a href={`https://api.whatsapp.com/send?phone=+905303992093&text=${shareText}`}>
            <div className="flex items-center mt-1">
                <div className="w-6 mr-2">
                <Whatsapp/> 
                </div>
                Whatsapp
            </div>
        </a>

    }

    useEffect(() => {
        const init = async() => {
            const productDetail = await ProductService.getProductDetail(match.params.id);
            await setProductDetail(productDetail)
            await setProductProperty(productDetail.product_property)
            await setUseEffectPhoto(productDetail.photosSourceArray)
            await setProductComments(productDetail.meta.comments)
            await setProductFav(productDetail.meta.favs)
            await setSelectPhoto(productDetail.photosSourceArray[0])
        }
        init();
    }, [])

    return (
        <MainLayout>
            <div className="flex flex-col my-10 mx-5">
                <div className="md:flex justify-center mx-auto mb-10">
                    
                    <div className="flex">
                        <div>
                            { 
                                selectPhoto ? 
                                <div style={{width:"300px", height:"500px"}}>
                                    <img className="object-cover w-full h-full" src={`http://147.182.212.103:8000/public/uploads/${selectPhoto}`} alt=""/>
                                </div> :
                                <div style={{width:"300px", height:"500px"}} className="bg-purple-50 flex animate-pulse flex-col items-center justify-center mb-10">
                                    <div className="flex">
                                        <span className="bg-yellow-600 w-2 h-4 rounded-l-xl mb-2"></span>
                                        <span className="bg-indigo-600 w-2 h-4 rounded-r-xl mb-2"></span>
                                    </div>
                                </div> 
                            }
                        </div>
                        <div className="ml-2" style={{width:"50px", height:"70px"}} >
                            {
                               useEffectPhoto.map((photo,i)=>(
                                    <img key={i} onClick={()=>selectPhotoEvent(i)} className={useEffectPhoto[i] === selectPhoto ? "object-cover w-full h-full mx-auto md:flex-none w-12 mb-2 border border-black" : "object-cover w-full h-full mx-auto md:flex-none w-12 mb-2"} src={`http://147.182.212.103:8000/public/uploads/${photo}`} alt=""/>
                               )) 
                            }
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col md:ml-10">
                    <p className="text-blue-600 mt-4">caglargelinlik</p> 
                        <p className="text-3xl font-medium">{productDetail.product_name}</p> 
                        <p className="text-blue-600 mt-2">{productDetail.product_code}</p> 
                        <div className="mt-7 h-full">
                            <h1 className="font-medium mt-3">Ürün Bilgileri</h1>
                            {
                                productProperty.map((item,i)=>(
                                    <p key={i} className="mt-2 text-gray-800 text-sm">{item}</p>
                                ))
                            }
                            <h1 className="font-medium mt-3">Ürünü Paylaş</h1>
                            { shareWhatsapp() }
                        </div>
                    </div> 
                </div>
                <Rating productDetail= {productDetail} match={match.params.id} productComments= { productComments } fav = {productFav}/>
            </div>
        </MainLayout>
    )
}
