import React, { useState, useEffect, Fragment } from 'react'

export default function Banner() {
    
    const [campaigns] = useState([
        { 
            title: "Yeni Kampanya Dönemi Başladı!!!",
            description: "Yeni ürünlerde kaçınılmaz fırsatlar ",
        }
    ]);

    useEffect(() =>{

    },[]);

    return (
        <div>
            <div className="bg-gray-300 bg-opacity-25 flex justify-center py-3 text-xs">
                    <p className="antialiased text-gray-800 font-light">
                        {
                            campaigns.map((campaign,index)=>(
                                <Fragment key={index}>
                                    <span className="uppercase tracking-widest md:hidden">
                                        {campaign.title}
                                    </span>
                                    <span className="uppercase tracking-widest hidden md:inline">
                                        {campaign.description} &nbsp;
                                    </span>
                                </Fragment>
                            ))
                        }
                    </p>
                    <span className="tracking-widest font-light text-black hover:underline"> DAHA FAZLA</span>
            </div>
        </div>
    )
}
