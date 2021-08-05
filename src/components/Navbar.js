import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData'
import { Hamburger, Close, Heart } from '../utils/Icons'
import Dropdown from '../components/Dropdown'
import { getSaved } from './Helpers'

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false)
    const [visibility, setVisibility] = useState(false);

    const open = () => {
        setOpenMenu(!openMenu);
    }

    const rainbow = () => (
        <Fragment>
            <div className="flex-1 bg-red-500"></div>
            <div className="flex-1 bg-blue-500"></div>
            <div className="flex-1 bg-pink-500"></div>
            <div className="flex-1 bg-yellow-500"></div>
            <div className="flex-1 bg-green-700"></div>
        </Fragment>
    )

    return (
        <div>
            
            <div className="hidden md:flex items-center justify-between mx-5 my-3">
                
                <p className="logo-name text-3xl">ÇAĞLAR GELİNLİK</p>

                <div className="flex flex-1 items-center justify-center">

                    {
                        NavbarData.map((item, index) => {
                            return (
                            <li key={index} className="nav-item mx-10">
                                <Link to={item.path}>
                                    <div className="flex items-center">
                                        { 
                                            item.title
                                        }
                                    </div>
                                </Link>
                            </li>
                            );
                        })
                    }       
                    <div className="absolute right-0 mr-10 flex items-center">
                        <Heart fill="none"/>
                        <Link to={'/saved-product'}>
                            <p className="font-medium ml-1 hover:underline">Kaydedilenler ({getSaved()})</p>
                        </Link>
                    </div>         

                </div>
                
                
            </div>
            
            <div className="flex items-center md:hidden m-3">

                <button onClick={open} className="icon-button">
                    <Hamburger/>
                </button>
                
                <p className="logo-name flex justify-center flex-1 text-3xl">ÇAĞLAR GELİNLİK</p>

            </div>
                    
            <div className={openMenu ? 'nav-menu active' : 'nav-menu'}>
                
                <div className="flex flex-col w-2 h-full">
                    { rainbow() }
                </div>
                
                <button onClick={open} className="absolute mt-3 ml-4 p-2 focus:outline-none">
                    <Close/>
                </button>

                <div className="flex flex-col items-center mx-auto mt-20">

                    {
                        NavbarData.map((item, index) => {
                            return (
                            <Fragment>
                                <li key={index} className="nav-item-responsive">
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            </Fragment>
                                
                            );
                        })
                    }
                         

                    <div className="flex items-center mt-5">
                        <Heart fill="none"/>
                        <Link to={'/saved-product'}>
                            <p className="font-medium ml-1 hover:underline">Kaydedilenler ({getSaved()})</p>
                        </Link>                    
                    </div> 

                    <div className="flex flex-col items-center mt-16">
                        <p className="text-gray-700 antialiased tracking-widest text-sm">
                            C A G L A R &nbsp; G E L İ N L İ K
                        </p>
                        <span className="mt-2 text-gray-700 antialiased tracking-widest text-sm">M O D A &nbsp; <span className="text-lg font-bold">X</span> &nbsp; 2 0 2 1</span>
                    </div>
                     

                </div>   
            </div>
                
            
            <div className="flex mt-2 h-2">
                { rainbow() }
            </div>
            
            
        </div>
    )
}
