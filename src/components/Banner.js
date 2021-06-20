import React, { useState, useEffect, Fragment } from 'react'

export default function Banner() {
    const [campaigns, setCampaigns] = useState([
        { 
            title: "Yeni Kampanya Dönemi Başladı!!!",
            description: "Yeni ürünlerde kaçınılmaz fırsatlar.",
            remaining_date: "Son 2 gün kaldı!"
        }
    ]);

    useEffect(() =>{

        },[])
    return (
        <div>
            <div className="bg-gray-300 bg-opacity-25 flex flex-col items-center py-3 text-sm">
                    <p className="antialiased font-light truncate">
                        {
                            campaigns.map((campaign,index)=>(
                                <Fragment key={index}>
                                    <span className="md:hidden">
                                        {campaign.title}
                                    </span>
                                    <span className="hidden md:inline">
                                        {campaign.description}
                                    </span>
                                    <span className="hidden md:inline font-semibold uppercase text-red-500"> {campaign.remaining_date} </span>
                                </Fragment>
                            ))
                        }
                    </p>
                    <a className="underline font-semibold" href="/#"> Daha fazla bilgi edinin.</a>
            </div>
        </div>
    )
}
