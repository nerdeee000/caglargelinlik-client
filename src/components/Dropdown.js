import React,{ useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Bride from '../static/img/bride-2.png'
export default function Dropdown({title}) {

    return (
        <Fragment>
            <div class="dropdown">
                <span>{title}</span>
                <div class="dropdown-content">
                    <div className="rounded-md pl-2 py-4 hover:bg-gray-100">
                        <p>Gelinlik</p>
                    </div>
                    <div className="rounded-md pl-2 py-4 hover:bg-gray-100">
                        <p>Nişanlık</p>
                    </div>
                    <div className="rounded-md pl-2 py-4 hover:bg-gray-100">
                        <p>Bindallık</p>
                    </div>
                    <div className="rounded-md pl-2 py-4 hover:bg-gray-100">
                        <p>Aksesuar</p>
                    </div>
                </div>
            </div>           
        </Fragment>
    )
}
