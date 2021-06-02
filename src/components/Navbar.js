import React, { useState } from 'react';
import Logo from '../utils/Logo';
export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div>
            
            <div className="flex justify-around mt-4">
                <button className="hidden md:flex mb-3 antialiased focus:outline-none text-xl text-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-gray-800">
                    <span>Ana Sayfa</span>
                </button>
                <button className="hidden md:flex mb-3 inline-flex antialiased focus:outline-none text-xl text-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-gray-800">
                    <span>Modeller</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <button className="hidden md:flex mb-3 antialiased focus:outline-none text-xl text-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-gray-800">
                    <span>Albüm</span>
                </button>
                <button className="hidden md:flex mb-3 antialiased focus:outline-none text-xl text-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-gray-800">
                    <span>Blog</span>
                </button>
                <button className="hidden md:flex mb-3 antialiased focus:outline-none text-xl text-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-gray-800">
                    <span>Nasıl Giderim?</span>
                </button>
                <button className="hidden md:flex mb-3 antialiased focus:outline-none text-xl text-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-gray-800">
                    <span>Destek</span>
                </button>
                <button className="hidden md:flex mb-3 antialiased focus:outline-none text-xl text-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-gray-800">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.31573 13.7811L4.04591 13.6098L3.31573 13.7811ZM3.31573 8.324L4.04591 8.49528L3.31573 8.324ZM18.7893 8.324L19.5195 8.15273L18.7893 8.324ZM18.7893 13.781L19.5195 13.9523L18.7893 13.781ZM13.781 18.7893L13.6098 18.0591L13.781 18.7893ZM8.324 18.7893L8.15273 19.5195L8.324 18.7893ZM8.324 3.31573L8.15272 2.58555L8.324 3.31573ZM13.781 3.31573L13.9523 2.58555L13.781 3.31573ZM20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L20.4697 21.5303ZM4.04591 13.6098C3.65136 11.9278 3.65136 10.1773 4.04591 8.49528L2.58555 8.15272C2.13815 10.06 2.13815 12.045 2.58555 13.9523L4.04591 13.6098ZM18.0591 8.49528C18.4537 10.1773 18.4537 11.9278 18.0591 13.6098L19.5195 13.9523C19.9669 12.045 19.9669 10.06 19.5195 8.15273L18.0591 8.49528ZM13.6098 18.0591C11.9278 18.4537 10.1773 18.4537 8.49528 18.0591L8.15273 19.5195C10.06 19.9669 12.045 19.9669 13.9523 19.5195L13.6098 18.0591ZM8.49528 4.04591C10.1773 3.65136 11.9278 3.65136 13.6098 4.04591L13.9523 2.58555C12.045 2.13815 10.06 2.13815 8.15272 2.58555L8.49528 4.04591ZM8.49528 18.0591C6.28757 17.5413 4.56377 15.8175 4.04591 13.6098L2.58555 13.9523C3.23351 16.7147 5.39038 18.8715 8.15273 19.5195L8.49528 18.0591ZM13.9523 19.5195C16.7147 18.8715 18.8715 16.7147 19.5195 13.9523L18.0591 13.6098C17.5413 15.8175 15.8175 17.5413 13.6098 18.0591L13.9523 19.5195ZM13.6098 4.04591C15.8175 4.56377 17.5413 6.28757 18.0591 8.49528L19.5195 8.15273C18.8715 5.39037 16.7147 3.23351 13.9523 2.58555L13.6098 4.04591ZM8.15272 2.58555C5.39037 3.23351 3.23351 5.39037 2.58555 8.15272L4.04591 8.49528C4.56377 6.28756 6.28757 4.56377 8.49528 4.04591L8.15272 2.58555ZM16.8048 17.8655L20.4697 21.5303L21.5303 20.4697L17.8655 16.8048L16.8048 17.8655Z" fill="black"/>
                    </svg>
                </button>
                <button className="hidden md:flex mb-3 antialiased focus:outline-none text-xl text-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-gray-800">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.6531 17.0462L3.95889 17.3301H3.95889L4.6531 17.0462ZM4.30609 11.4453L3.58237 11.2485L3.58237 11.2485L4.30609 11.4453ZM19.6939 11.4452L20.4176 11.2485L19.6939 11.4452ZM19.3469 17.0462L18.6527 16.7624L18.6527 16.7624L19.3469 17.0462ZM14.0365 20.8426L13.9211 20.1015L14.0365 20.8426ZM9.96352 20.8426L9.84819 21.5837L9.96352 20.8426ZM8.08242 7.7854L7.93367 7.0503L8.08242 7.7854ZM15.9176 7.7854L15.7688 8.5205L15.9176 7.7854ZM9.21479 20.7261L9.33011 19.985L9.21479 20.7261ZM4.74599 17.2734L5.4402 16.9895H5.4402L4.74599 17.2734ZM14.7852 20.7261L14.9005 21.4671V21.4671L14.7852 20.7261ZM19.254 17.2734L19.9482 17.5573V17.5573L19.254 17.2734ZM19.6174 11.1638L18.8937 11.3606V11.3606L19.6174 11.1638ZM4.38262 11.1638L5.10635 11.3606H5.10635L4.38262 11.1638ZM15.1775 8.02577L14.4909 7.72404L15.1775 8.02577ZM14.2779 8.2088C14.1112 8.58802 14.2836 9.03052 14.6628 9.19716C15.042 9.3638 15.4845 9.19148 15.6511 8.81226L14.2779 8.2088ZM8.82248 8.02577L9.50911 7.72404V7.72404L8.82248 8.02577ZM8.34887 8.81226C8.51551 9.19148 8.95802 9.3638 9.33723 9.19716C9.71645 9.03052 9.88877 8.58802 9.72213 8.2088L8.34887 8.81226ZM11.2429 3.0742L11.3691 3.81351L11.3691 3.81351L11.2429 3.0742ZM11.3604 3.05415L11.2342 2.31484L11.2342 2.31484L11.3604 3.05415ZM12.6396 3.05415L12.5134 3.79346L12.5134 3.79346L12.6396 3.05415ZM12.7571 3.0742L12.8832 2.33489L12.8832 2.33489L12.7571 3.0742ZM15.4253 5.54836L16.1579 5.38741L15.4253 5.54836ZM8.57466 5.54836L9.30719 5.70931L8.57466 5.54836ZM14.6699 19.985L13.9211 20.1015L14.1518 21.5837L14.9005 21.4671L14.6699 19.985ZM10.0788 20.1015L9.33011 19.985L9.09946 21.4671L9.84819 21.5837L10.0788 20.1015ZM18.8937 11.3606L18.9702 11.642L20.4176 11.2485L20.3411 10.967L18.8937 11.3606ZM18.6527 16.7624L18.5598 16.9896L19.9482 17.5573L20.0411 17.3301L18.6527 16.7624ZM5.4402 16.9895L5.34731 16.7624L3.95889 17.3301L4.05177 17.5572L5.4402 16.9895ZM5.02981 11.642L5.10635 11.3606L3.6589 10.967L3.58237 11.2485L5.02981 11.642ZM5.34731 16.7624C4.67945 15.129 4.56875 13.3377 5.02981 11.642L3.58237 11.2485C3.03448 13.2634 3.16667 15.3925 3.95889 17.3301L5.34731 16.7624ZM18.9702 11.642C19.4313 13.3377 19.3205 15.129 18.6527 16.7624L20.0411 17.3301C20.8333 15.3926 20.9655 13.2634 20.4176 11.2485L18.9702 11.642ZM13.9211 20.1015C12.6488 20.2995 11.3512 20.2995 10.0788 20.1015L9.84819 21.5837C11.2734 21.8054 12.7266 21.8054 14.1518 21.5837L13.9211 20.1015ZM8.23117 8.5205C10.7161 8.01766 13.2839 8.01766 15.7688 8.5205L16.0663 7.0503C13.3851 6.50773 10.6149 6.50773 7.93367 7.0503L8.23117 8.5205ZM9.33011 19.985C7.55413 19.7086 6.08232 18.56 5.4402 16.9895L4.05177 17.5572C4.9021 19.6369 6.82848 21.1137 9.09946 21.4671L9.33011 19.985ZM14.9005 21.4671C17.1715 21.1137 19.0979 19.6369 19.9482 17.5573L18.5598 16.9896C17.9177 18.56 16.4458 19.7086 14.6699 19.985L14.9005 21.4671ZM15.7688 8.5205C17.3088 8.83212 18.5082 9.94301 18.8937 11.3606L20.3411 10.967C19.7992 8.974 18.1334 7.46858 16.0663 7.0503L15.7688 8.5205ZM7.93367 7.0503C5.86662 7.46858 4.20082 8.974 3.6589 10.967L5.10635 11.3606C5.4918 9.94301 6.69121 8.83212 8.23117 8.5205L7.93367 7.0503ZM14.4909 7.72404L14.2779 8.2088L15.6511 8.81226L15.8642 8.3275L14.4909 7.72404ZM8.13585 8.3275L8.34887 8.81226L9.72213 8.2088L9.50911 7.72404L8.13585 8.3275ZM11.3691 3.81351L11.4866 3.79346L11.2342 2.31484L11.1168 2.33489L11.3691 3.81351ZM12.5134 3.79346L12.6309 3.81351L12.8832 2.33489L12.7658 2.31484L12.5134 3.79346ZM14.6928 5.70931C14.8411 6.38397 14.7712 7.08613 14.4909 7.72404L15.8642 8.3275C16.2716 7.40023 16.3747 6.37415 16.1579 5.38741L14.6928 5.70931ZM7.84213 5.38741C7.62533 6.37415 7.72837 7.40023 8.13585 8.3275L9.50911 7.72404C9.22878 7.08613 9.15895 6.38397 9.30719 5.70931L7.84213 5.38741ZM11.4866 3.79346C11.8261 3.73551 12.1739 3.73551 12.5134 3.79346L12.7658 2.31484C12.2592 2.22839 11.7408 2.22839 11.2342 2.31484L11.4866 3.79346ZM16.1579 5.38741C15.8102 3.80521 14.5013 2.61105 12.8832 2.33489L12.6309 3.81351C13.6808 3.99271 14.4835 4.75649 14.6928 5.70931L16.1579 5.38741ZM9.30719 5.70931C9.51654 4.75649 10.3192 3.99271 11.3691 3.81351L11.1168 2.33489C9.49869 2.61105 8.18977 3.80521 7.84213 5.38741L9.30719 5.70931Z" fill="black"/>
                    </svg>
                </button>
            </div>
            <div className="md:hidden flex">
             <button className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
             </button>
             <button className="flex-2 mb-3 antialiased focus:outline-none text-xl text-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-gray-800">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.6531 17.0462L3.95889 17.3301H3.95889L4.6531 17.0462ZM4.30609 11.4453L3.58237 11.2485L3.58237 11.2485L4.30609 11.4453ZM19.6939 11.4452L20.4176 11.2485L19.6939 11.4452ZM19.3469 17.0462L18.6527 16.7624L18.6527 16.7624L19.3469 17.0462ZM14.0365 20.8426L13.9211 20.1015L14.0365 20.8426ZM9.96352 20.8426L9.84819 21.5837L9.96352 20.8426ZM8.08242 7.7854L7.93367 7.0503L8.08242 7.7854ZM15.9176 7.7854L15.7688 8.5205L15.9176 7.7854ZM9.21479 20.7261L9.33011 19.985L9.21479 20.7261ZM4.74599 17.2734L5.4402 16.9895H5.4402L4.74599 17.2734ZM14.7852 20.7261L14.9005 21.4671V21.4671L14.7852 20.7261ZM19.254 17.2734L19.9482 17.5573V17.5573L19.254 17.2734ZM19.6174 11.1638L18.8937 11.3606V11.3606L19.6174 11.1638ZM4.38262 11.1638L5.10635 11.3606H5.10635L4.38262 11.1638ZM15.1775 8.02577L14.4909 7.72404L15.1775 8.02577ZM14.2779 8.2088C14.1112 8.58802 14.2836 9.03052 14.6628 9.19716C15.042 9.3638 15.4845 9.19148 15.6511 8.81226L14.2779 8.2088ZM8.82248 8.02577L9.50911 7.72404V7.72404L8.82248 8.02577ZM8.34887 8.81226C8.51551 9.19148 8.95802 9.3638 9.33723 9.19716C9.71645 9.03052 9.88877 8.58802 9.72213 8.2088L8.34887 8.81226ZM11.2429 3.0742L11.3691 3.81351L11.3691 3.81351L11.2429 3.0742ZM11.3604 3.05415L11.2342 2.31484L11.2342 2.31484L11.3604 3.05415ZM12.6396 3.05415L12.5134 3.79346L12.5134 3.79346L12.6396 3.05415ZM12.7571 3.0742L12.8832 2.33489L12.8832 2.33489L12.7571 3.0742ZM15.4253 5.54836L16.1579 5.38741L15.4253 5.54836ZM8.57466 5.54836L9.30719 5.70931L8.57466 5.54836ZM14.6699 19.985L13.9211 20.1015L14.1518 21.5837L14.9005 21.4671L14.6699 19.985ZM10.0788 20.1015L9.33011 19.985L9.09946 21.4671L9.84819 21.5837L10.0788 20.1015ZM18.8937 11.3606L18.9702 11.642L20.4176 11.2485L20.3411 10.967L18.8937 11.3606ZM18.6527 16.7624L18.5598 16.9896L19.9482 17.5573L20.0411 17.3301L18.6527 16.7624ZM5.4402 16.9895L5.34731 16.7624L3.95889 17.3301L4.05177 17.5572L5.4402 16.9895ZM5.02981 11.642L5.10635 11.3606L3.6589 10.967L3.58237 11.2485L5.02981 11.642ZM5.34731 16.7624C4.67945 15.129 4.56875 13.3377 5.02981 11.642L3.58237 11.2485C3.03448 13.2634 3.16667 15.3925 3.95889 17.3301L5.34731 16.7624ZM18.9702 11.642C19.4313 13.3377 19.3205 15.129 18.6527 16.7624L20.0411 17.3301C20.8333 15.3926 20.9655 13.2634 20.4176 11.2485L18.9702 11.642ZM13.9211 20.1015C12.6488 20.2995 11.3512 20.2995 10.0788 20.1015L9.84819 21.5837C11.2734 21.8054 12.7266 21.8054 14.1518 21.5837L13.9211 20.1015ZM8.23117 8.5205C10.7161 8.01766 13.2839 8.01766 15.7688 8.5205L16.0663 7.0503C13.3851 6.50773 10.6149 6.50773 7.93367 7.0503L8.23117 8.5205ZM9.33011 19.985C7.55413 19.7086 6.08232 18.56 5.4402 16.9895L4.05177 17.5572C4.9021 19.6369 6.82848 21.1137 9.09946 21.4671L9.33011 19.985ZM14.9005 21.4671C17.1715 21.1137 19.0979 19.6369 19.9482 17.5573L18.5598 16.9896C17.9177 18.56 16.4458 19.7086 14.6699 19.985L14.9005 21.4671ZM15.7688 8.5205C17.3088 8.83212 18.5082 9.94301 18.8937 11.3606L20.3411 10.967C19.7992 8.974 18.1334 7.46858 16.0663 7.0503L15.7688 8.5205ZM7.93367 7.0503C5.86662 7.46858 4.20082 8.974 3.6589 10.967L5.10635 11.3606C5.4918 9.94301 6.69121 8.83212 8.23117 8.5205L7.93367 7.0503ZM14.4909 7.72404L14.2779 8.2088L15.6511 8.81226L15.8642 8.3275L14.4909 7.72404ZM8.13585 8.3275L8.34887 8.81226L9.72213 8.2088L9.50911 7.72404L8.13585 8.3275ZM11.3691 3.81351L11.4866 3.79346L11.2342 2.31484L11.1168 2.33489L11.3691 3.81351ZM12.5134 3.79346L12.6309 3.81351L12.8832 2.33489L12.7658 2.31484L12.5134 3.79346ZM14.6928 5.70931C14.8411 6.38397 14.7712 7.08613 14.4909 7.72404L15.8642 8.3275C16.2716 7.40023 16.3747 6.37415 16.1579 5.38741L14.6928 5.70931ZM7.84213 5.38741C7.62533 6.37415 7.72837 7.40023 8.13585 8.3275L9.50911 7.72404C9.22878 7.08613 9.15895 6.38397 9.30719 5.70931L7.84213 5.38741ZM11.4866 3.79346C11.8261 3.73551 12.1739 3.73551 12.5134 3.79346L12.7658 2.31484C12.2592 2.22839 11.7408 2.22839 11.2342 2.31484L11.4866 3.79346ZM16.1579 5.38741C15.8102 3.80521 14.5013 2.61105 12.8832 2.33489L12.6309 3.81351C13.6808 3.99271 14.4835 4.75649 14.6928 5.70931L16.1579 5.38741ZM9.30719 5.70931C9.51654 4.75649 10.3192 3.99271 11.3691 3.81351L11.1168 2.33489C9.49869 2.61105 8.18977 3.80521 7.84213 5.38741L9.30719 5.70931Z" fill="black"/>
                    </svg>
            </button>
            </div>
            <div className="flex h-2">
                <div className="flex-1 bg-red-500"></div>
                <div className="flex-1 bg-blue-500"></div>
                <div className="flex-1 bg-pink-500"></div>
                <div className="flex-1 bg-yellow-500"></div>
                <div className="flex-1 bg-green-700"></div>
            </div>
        </div>
    )
}