import React from 'react'
import './footer.scss'

import Navbar from '../Navbar'

function Footer() {
    return (
        <footer>
            <div className='footer__contayner'>
                <div className="card-item1">
                    <h2>Furnero.</h2>
                    <p>400 University Drive Suite 200 Coral <br /> Gables,<br />
                        FL 33134 USA</p>
                </div>
                <div className="card-item2">
                    <h4>Link</h4>
                    <Navbar  isHeader={false}/>
                </div>
                <div className="card-item3 card-item2">
                    <h4>Help</h4>
                    <ul>
                        <li>
                            <a href="">Payment Options</a>
                        </li>
                        <li>
                            <a href="">Returns</a>
                        </li>
                        <li>
                            <a href="">Privacy Policies</a>
                        </li>
                    </ul>
                </div>
                <div className="card-item4">
                    <h4>Newsletter</h4>

                    <div className='footer-input'>
                        <input type="text" placeholder='Enter Your Email Address' />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>

            </div>
            <div className="yakun">
                <p>2023 furino. All rights reverved</p>
            </div>
        </footer>
    )
}

export default Footer