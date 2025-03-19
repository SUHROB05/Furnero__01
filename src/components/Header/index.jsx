import React from 'react';
import './header.scss';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Furniro__logo from '../../assets/icons/Furniro__logo.svg';
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineBars } from "react-icons/ai";

import Navbar from '../Navbar';



function Header() {
    return (
        <header>
            <div className="header__logo">
                <img src={Furniro__logo} alt="Furniro Logo" />
                <h2>Furniro</h2>
            </div>
            <Navbar  isHeader={true}/>
            <ul className='icons__ul'>
                <li>
                    <a href=""><MdOutlineAccountCircle className='item-icon' /></a>
                </li>
                <li>
                    <a href=""><IoSearchOutline className='item-icon' /></a>
                </li>
                <li>
                    <a href=""><FaRegHeart className='item-icon' /></a>
                </li>
                <li>
                    <a href=""><TiShoppingCart className='item-icon' /></a>
                </li>
            </ul>
            <div className='header__menu'>
                <div className="header__menu-text">
                    <AiOutlineBars className='item-icon' />
                    <h2>Menu</h2>
                </div>
            </div>
        </header >
    )
}

export default Header