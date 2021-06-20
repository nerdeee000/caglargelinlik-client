import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData'
import { Basket, Hamburger, Close, Search } from '../utils/Icons'

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false)
    const open = () => {
        setOpenMenu(!openMenu)
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
            <div className="flex items-center justify-around my-3">
                {
                    NavbarData.map((item, index) => {
                        return (
                          <li key={index} className="nav-item">
                            <Link to={item.path}>
                              <span>{item.title}</span>
                            </Link>
                          </li>
                        );
                    })
                }                

                <button className="nav-item icon-button">
                    <Search/>
                </button>

                <button className="nav-item icon-button">
                    <Basket/>
                    <span className="bg-indigo-700 w-4 h-4 rounded-xl absolute bottom-0 ml-4 animate-ping"></span>
                    <span className="bg-indigo-700 w-4 h-4 rounded-xl absolute bottom-0 ml-4 text-white font-bold text-xs">1</span>
                </button>

            </div>
            
            <div className="flex items-center justify-between md:hidden mx-3">
                <button onClick={open} className="icon-button">
                    <Hamburger/>
                </button>
                <div className="logo-name text-2xl">ÇAĞLAR GELİNLİK</div>
                <button className="icon-button">
                    <Basket/>
                    <span className="bg-indigo-700 w-4 h-4 rounded-xl absolute bottom-0 mr-4 animate-ping"></span>
                    <span className="bg-indigo-700 w-4 h-4 rounded-xl absolute bottom-0 mr-4 text-white font-bold text-xs">1</span>
                </button>
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
                            <li key={index} className="nav-item-responsive">
                                <Link to={item.path}>
                                <span>{item.title}</span>
                                </Link>
                            </li>
                            );
                        })
                    }     

                    <div className="flex flex-col items-center mt-16">
                        <span className="text-gray-700 antialiased tracking-widest text-sm">C A G L A R &nbsp; G E L İ N L İ K</span>
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
