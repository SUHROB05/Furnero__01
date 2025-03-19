import React from 'react'
import './home.scss'
import CardContainer from '../Card'

import { HiArrowRight } from "react-icons/hi";
import { RxBorderSolid } from "react-icons/rx";

import cardRasim1 from "../../assets/imgs/home/card-1__1.svg"
import cardRasim2 from "../../assets/imgs/home/card-1__2.svg"
import cardRasim3 from "../../assets/imgs/home/card-1__3.svg"
import Carusel from "../../assets/imgs/home/carusel1.svg"
import Carusel2 from "../../assets/imgs/home/carusel2.svg"
import Carusel3 from "../../assets/imgs/home/carusel3.svg"


function Home() {
    return (
        <div className='home'>
            <section className='home__section-1'>
                <div className='home__card-animeyshin'>
                    <p className='cad__text-1'>New Arrival</p>
                    <h2>Discover Our <br /> New  Collection</h2>
                    <p className='card__text-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button>BUY NOW</button>
                </div>
            </section>

            <section className='home__section-2'>
                <div className='section__text'>
                    <h2>Browse The Range</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='card-contayner1'>
                    <div className="card-1">
                        <div className="card-1__img">
                            <img src={cardRasim1} alt="rasim" />
                        </div>
                        <div className="card-1__text">
                            <h2>Dining</h2>
                        </div>
                    </div>
                    <div className="card-1">
                        <div className="card-1__img">
                            <img src={cardRasim2} alt="rasim" />
                        </div>
                        <div className="card-1__text">
                            <h2>Living</h2>
                        </div>
                    </div>
                    <div className="card-1">
                        <div className="card-1__img">
                            <img src={cardRasim3} alt="rasim" />
                        </div>
                        <div className="card-1__text">
                            <h2>Bedroom</h2>
                        </div>
                    </div>
                </div>
                <div className="card-contayner2">
                    <h2>Our Products</h2>
                    {/* <div className="card-2">
                        <div className="card-2__blook">
                            <div className="card-2_img">
                                <img src="" alt="card rasim uchun" />
                                <div className="card-2__chegirma">
                                    <p>-30%</p>
                                </div>
                            </div>
                            <div className="card-2__text">
                                <p className='card-2__p1'></p>
                                <p className='card-2__p2'></p>
                                <p className='card-2__p3'></p>
                            </div>
                        </div>
                        <div className="card-2__hiden">
                            <button>Add to cart</button>
                            <div className="card-2__icons">
                                
                            </div>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="card-2__blook">
                            <div className="card-2_img">
                                <img src="" alt="card rasim uchun" />
                                <div className="card-2__chegirma">
                                    <p>-30%</p>
                                </div>
                            </div>
                            <div className="card-2__text">
                                <p className='card-2__p1'></p>
                                <p className='card-2__p2'></p>
                                <p className='card-2__p3'></p>
                            </div>
                        </div>
                        <div className="card-2__hiden">
                            <button>Add to cart</button>
                            <div className="card-2__icons">
                                
                            </div>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="card-2__blook">
                            <div className="card-2_img">
                                <img src="" alt="card rasim uchun" />
                                <div className="card-2__chegirma">
                                    <p>-30%</p>
                                </div>
                            </div>
                            <div className="card-2__text">
                                <p className='card-2__p1'></p>
                                <p className='card-2__p2'></p>
                                <p className='card-2__p3'></p>
                            </div>
                        </div>
                        <div className="card-2__hiden">
                            <button>Add to cart</button>
                            <div className="card-2__icons">
                                
                            </div>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="card-2__blook">
                            <div className="card-2_img">
                                <img src="" alt="card rasim uchun" />
                                <div className="card-2__chegirma">
                                    <p>-30%</p>
                                </div>
                            </div>
                            <div className="card-2__text">
                                <p className='card-2__p1'></p>
                                <p className='card-2__p2'></p>
                                <p className='card-2__p3'></p>
                            </div>
                        </div>
                        <div className="card-2__hiden">
                            <button>Add to cart</button>
                            <div className="card-2__icons">
                                
                            </div>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="card-2__blook">
                            <div className="card-2_img">
                                <img src="" alt="card rasim uchun" />
                                <div className="card-2__chegirma">
                                    <p>-30%</p>
                                </div>
                            </div>
                            <div className="card-2__text">
                                <p className='card-2__p1'></p>
                                <p className='card-2__p2'></p>
                                <p className='card-2__p3'></p>
                            </div>
                        </div>
                        <div className="card-2__hiden">
                            <button>Add to cart</button>
                            <div className="card-2__icons">
                                
                            </div>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="card-2__blook">
                            <div className="card-2_img">
                                <img src="" alt="card rasim uchun" />
                                <div className="card-2__chegirma">
                                    <p>-30%</p>
                                </div>
                            </div>
                            <div className="card-2__text">
                                <p className='card-2__p1'></p>
                                <p className='card-2__p2'></p>
                                <p className='card-2__p3'></p>
                            </div>
                        </div>
                        <div className="card-2__hiden">
                            <button>Add to cart</button>
                            <div className="card-2__icons">
                                
                            </div>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="card-2__blook">
                            <div className="card-2_img">
                                <img src="" alt="card rasim uchun" />
                                <div className="card-2__chegirma">
                                    <p>-30%</p>
                                </div>
                            </div>
                            <div className="card-2__text">
                                <p className='card-2__p1'></p>
                                <p className='card-2__p2'></p>
                                <p className='card-2__p3'></p>
                            </div>
                        </div>
                        <div className="card-2__hiden">
                            <button>Add to cart</button>
                            <div className="card-2__icons">
                                
                            </div>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="card-2__blook">
                            <div className="card-2_img">
                                <img src="" alt="card rasim uchun" />
                                <div className="card-2__chegirma">
                                    <p>-30%</p>
                                </div>
                            </div>
                            <div className="card-2__text">
                                <p className='card-2__p1'></p>
                                <p className='card-2__p2'></p>
                                <p className='card-2__p3'></p>
                            </div>
                        </div>
                        <div className="card-2__hiden">
                            <button>Add to cart</button>
                            <div className="card-2__icons">
                                
                            </div>
                        </div>
                    </div> */}

                    <CardContainer />
                    <CardContainer />
                    <div className="contayner2-button">
                        <button>Show More</button>
                    </div>
                </div>
            </section>
            <ssection className="home__section-3">
                <div className='section-3__item1'>
                    <h3>50+ Beautiful rooms
                        inspiration</h3>
                    <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <button>Explore More</button>
                </div>
                <div className='section-3__item2'>
                    <div className='item2-img'>
                        <img src={Carusel} alt="" />
                    </div>
                    <div className="item2-text">
                        <div className="text">
                            <p>01<RxBorderSolid />
                                Bed Room</p><br />
                            <h4>Inner Peace</h4>
                        </div>
                        <button><HiArrowRight /></button>
                    </div>
                </div>
                <div className='section-3__item3'>
                    <div className="item-img">
                        <img className='img1' src={Carusel2} alt="" />
                        <img className='img2' src={Carusel3} alt="" />
                    </div>
                    <div className="carusel__icon"></div>
                </div>
                <div className="section-3__button">
                    <button>&gt;</button>
                </div>
            </ssection>
        </div>
    );
}

export default Home;
