import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPartlySunny } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Header(){

    const [isOpen, setIsOpen] = useState(false)


    return(
        <header className="header">
            <div className="navbar">
                <Link to='/'><div className="navbar__logo"><img src="./2.png" className="logo__img" alt="logo"/></div></Link>
                <ul className='menu__link-list'>
                        <li className='link-list__link'>Documentation</li>
                        <Link to='/#componets-showcase'><li className='link-list__link'>Components</li></Link>
                        <li className='link-list__link'>Templates</li>
                        <li className='link-list__link'>GitHub</li>
                    </ul>
                <GiHamburgerMenu className='navbar__burger-menu' onClick={() => setIsOpen(prev => !prev)} color="white" size='20%' />
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