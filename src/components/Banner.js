import React from 'react'

export default function Banner() {
    return (
        <div>
            <div className="bg-gray-300 bg-opacity-25 flex flex-col items-center py-3 text-sm">
                    <p className="antialiased font-light truncate">
                        <span className="md:hidden">
                            Yeni Kampanya Dönemi Başladı!!!
                        </span>
                        <span className="hidden md:inline">
                            Yeni ürünlerde kaçınılmaz fırsatlar. Fırsatlardan yararlanmak için son
                        </span>
                        <span className="hidden md:inline font-semibold uppercase text-red-500"> 2 gün kaldı! </span>
                    </p>
                    <a className="underline font-semibold" href="/#"> Daha fazla bilgi edinin.</a>
            </div>
        </div>
    )
}
