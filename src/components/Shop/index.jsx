import React from 'react'
import './shop.scss'
import ItemFooter from '../item__footer'
// import CardList from '../CardList/indix'
import Card from '../Card'

import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiSquares2X2 } from "react-icons/hi2";
import { BsViewList } from "react-icons/bs";


function Shop() {
    return (
        <div className='shop' id='shop'>
            <div className="shop__item">
                <div className="shop__item-text">
                    <h2>SHOP</h2>
                    <p>Home   &gt; <span>Shop</span></p>
                </div>
            </div>
            <section className='shop__section-1'>
                <div className="section__header">
                    <div className="section__header-icon">
                        <div className="header-icon1">
                            <HiAdjustmentsHorizontal className='item-icons' />
                            <h3>Filter</h3>
                        </div>
                        <div className="header-icon2">
                            <HiSquares2X2 className='item-icons' />
                            <BsViewList className='item-icons' />
                        </div>
                        <div className="header-icon3"></div>
                        <div className="header-icon4">
                            <h3>Showing 1–16 of 32 results</h3>
                        </div>
                    </div>
                    <div className="section__header-text">
                        <div className="text-input3">
                        <h3>Show</h3>
                        <p>16</p>
                        </div>
                        <div className="text-input3 text-input4">
                        <h3>Short by</h3>
                        <p>Default</p>
                        </div>
                    </div>
                </div>
                {/* <CardList/> */}
                <div className="shop-card-contayner">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="shop__shiyfa-button">
                    <button className='button-1'>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className='button-next'>Next</button>
                </div>
            </section>

            <ItemFooter />
        </div>
    )
}

export default Shop



