import React from 'react'
import './item__footer.scss'

import icons1 from '../../assets/icons/item__footer1.svg'
import icons2 from '../../assets/icons/item__footer2.svg'
import icons3 from '../../assets/icons/item__footer3.svg'
import icons4 from '../../assets/icons/item__footer4.svg'

function ItemFooter() {
    return (
        <section className='shop__section-2'>
            <div className="card">
                <div className="item-img">
                    <img src={icons1} alt="icon" />
                </div>
                <div className="item_text">
                    <h2>High Quality</h2>
                    <p>crafted from top materials</p>
                </div>
            </div>
            <div className="card">
                <div className="item-img">
                    <img src={icons2} alt="icon" />
                </div>
                <div className="item_text">
                    <h2>Warranty Protection</h2>
                    <p>Over 2 years</p>
                </div>
            </div>
            <div className="card">
                <div className="item-img">
                    <img src={icons3} alt="icon" />
                </div>
                <div className="item_text">
                    <h2>Free Shipping</h2>
                    <p>Order over 150 $</p>
                </div>
            </div>
            <div className="card">
                <div className="item-img">
                    <img src={icons4} alt="icon" />
                </div>
                <div className="item_text">
                    <h2>24 / 7 Support</h2>
                    <p>Dedicated support</p>
                </div>
            </div>
        </section>
    )
}

export default ItemFooter