import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPartlySunny } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import React, {useState} from 'react'


export default function Header(){

    const [isOpen, setIsOpen] = useState(false)


    return(
        <header className="header">
            <div className="navbar">
                <div className="navbar__logo"><img src="./2.png" className="logo__img" alt="logo"/></div>
                <GiHamburgerMenu onClick={() => setIsOpen(prev => !prev)} color="white" size='20%' />
                </div>
                <div className={`navbar__dropdown-menu ${isOpen ? 'open' : ''}`}>
                    <ul className='dropdown-menu__link-list'>
                        <li className='link-list__link'>Documentation</li>
                        <li className='link-list__link'>Components</li>
                        <li className='link-list__link'>Templates</li>
                        <li className='link-list__link'>GitHub</li>
                    </ul>
                </div>
            
        </header>
    )
}