import React, { useState, useEffect } from 'react'
import { Star, Check } from '../utils/Icons'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ProductService from '../service/product'

const validationSchema = Yup.object({
    name: Yup.string().required("Zorunlu alan. Boş Bırakılamaz!"),
    content: Yup.string().required("Zorunlu alan. Boş Bırakılamaz!"),
    point: Yup.number().required("Zorunlu alan. Boş Bırakılamaz!").max(5, 'En fazla 5 girilebilir').min(1, 'En az 1 girilebilir'),
});

export default function Rating({productComments, match, fav}) {

    const { setFieldValue, handleSubmit, handleChange, values, errors, isValid } = useFormik({
        initialValues: {
            name: '',
            content: '',
            point: ''
        },
        validationSchema,
        onSubmit: (values) => {
            ProductService.postComment(values, match)
            .then(() => {
                console.log("Comment shared")
            })
            .catch((err)=>{
                console.log(err)
            })
    }});

    const { name, content, point } = values;
    
    useEffect(async() => {
       

    }, [])
    return (
        <div className="mb-20">
            <h1 className="my-5 text-2xl font-medium">Ürün Değerlendirmeleri</h1>
            
            <div className="flex flex-col items-center border shadow-sm rounded-md">
                
                <div className="flex flex-col md:flex-row border w-full">
                    <div className="flex items-center p-5">
                        <h1 className="text-3xl font-bold">{productComments.length === 0 ? 0 :(fav/productComments.length).toFixed(2)}</h1>
                        <Star className={"w-7 h-7"} fill="#ffd800"/>
                    </div>
                    <h1 className="flex-1 mb-3 text-gray-700 flex justify-center items-center text-sm font-medium">{productComments.length} Yorum</h1>

                </div>

                <div className="w-full px-5 py-3">
                    <div className="flex flex-col">
                        <div className="flex flex-col mb-8">
                            <p className="font-bold mb-2">Haydi Değerlendir</p>
                            <input name="point" value = { point } onChange={handleChange} placeholder="(1-5) Arası yıldız verin" type="text" className="w-full md:flex-1 form-control mr-2"/>
                            { errors.point ? <p className="error-message">{errors.point}</p> : null}
                            <input name="name" value = { name } onChange={handleChange} placeholder="Adınız" type="text" className="w-full md:flex-1 form-control mr-2 mt-2"/>
                            { errors.name ? <p className="error-message">{errors.name}</p> : null}
                            <input name="content" value = { content } onChange={handleChange} placeholder="Değerlendirin" type="text" className="w-full mt-2 form-control flex-1"/>
                            { errors.content ? <p className="error-message">{errors.content}</p> : null}
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary w-full mt-2">Değerlendir</button>
                        </div> 
                       {
                           productComments.map((comment,i)=>(
                                <div>
                                   <div className="flex items-center">
                                        <Star className={"w-6 h-6"} fill="#ffd800"/>
                                        <p><span className="text-2xl">{comment.point}</span>/5</p>
                                   </div>
                                   <p>{comment.content}</p>
                                   <p className="text-xs">{comment.name}</p>
                               </div>
                           ))
                       }
                        
                    </div>
                    <hr className="mt-5"/>
                </div>
            </div>
        </div>
    )
}
