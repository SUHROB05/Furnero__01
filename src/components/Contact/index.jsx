import React from 'react'
import './contact.scss'
import ItemFooter from '../item__footer'
import furnitoIcons from '../../assets/icons/Furniro__logo.svg'

import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdWatchLater } from "react-icons/md";

function Contact() {
    return (
        <div className="contact">
            <div className="contact__item">
                <div className="contact__item-text">
                    <div className="item-img">
                        <img src={furnitoIcons} alt="Furniro icon" />
                    </div>
                    <h2>CONTACT</h2>
                    <p>Home &gt;  <span>Contact</span></p>
                </div>
            </div>
            <section className='contact__main'>
                <div className="contact__text">
                    <h2>Get In Touch With Us</h2>
                    <p>For More Information About Our Product & Services.
                        Please Feel Free To Drop Us <br /> An Email. Our Staff Always
                        Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <div className="contact__contayner">
                    <div className="firma__contact">
                        <div className="firma__item">
                            <div className="item-img">
                                <FaLocationDot className='item-icon' />
                            </div>
                            <div className="item-text">
                                <h3>Address</h3>
                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className="firma__item">
                            <div className="item-img">
                                <BsTelephoneFill className='item-icon' />
                            </div>
                            <div className="item-text">
                                <h3>Phone</h3>
                                <p>Mobile: +(84) 546-6789
                                    Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                        <div className="firma__item">
                            <div className="item-img">
                                <MdWatchLater className='item-icon' />
                            </div>
                            <div className="item-text">
                                <h3>Working</h3>
                                <p>Monday-Friday: 9:00 - <br /> 22:00
                                </p>
                                <p>Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact__form">
                        <form action="">
                            <label htmlFor="yourName">
                                Your name
                                <input type="text" placeholder="Name..." id="name" name="yourName" required />
                            </label>
                            <label htmlFor="email">
                                Email address
                                <input type="email" placeholder="Abc@def.com" name="email" required />
                            </label>
                            <label htmlFor="subject">
                                Subject
                                <input type="email" placeholder="This is an optional" name="subject" required />
                            </label>
                            <label htmlFor="Message">
                                Message
                                <textarea name="Message" id="" placeholder="Hi! i’d like to ask about"></textarea>
                            </label>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
            <ItemFooter />
        </div>
    )
}

export default Contact