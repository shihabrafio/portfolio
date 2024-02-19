import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Sky-Movie.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Sky Movie</h3>
                            <p>
                               Movie information application that utilizes the TMDB API to provide users with comprehensive details about movies.
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Tailwind CSS
                                <span> -</span> Redux
                            </p>
                            <a href="https://movie-api-lqpn.onrender.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/shihabrafio/Sky-Movie" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./TaskMate.PNG`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>TaskMate</h3>
                            <p>
                                lawyers website
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Tailwind CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://taskmate-nwzt.onrender.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/shihabrafio/Taskmate" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./EcoClima.png`)}
                            style={{ width: '119.667px' }}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>EcoClima</h3>
                            <p>
                              Revolutionizing climate action with an environmental-social app
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Redux
                            </p>
                            <a href="https://ecoclima.onrender.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/shihabrafio/EcoClima" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Afforai.PNG`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Afforai</h3>
                            <p>
                                AI chatbot that searches, summarizes, and translates info from multiple sources
                                to produce trustworthy research
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Tailwind CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://afforai-cwsf.onrender.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/shihabrafio/Afforai" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Meco.PNG`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>MECO</h3>
                            <p>
                                MECO is a company that specializes in providing AI-driven solutions and services to help businesses streamline their operations and improve their performance
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://shihabrafio.github.io/Meco-Chocolate/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/shihabrafio/Meco-Chocolate" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-12.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>EveryRunnig</h3>
                            <p>
                                Website shoes
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Bootstrap
                            </p>
                            <a href="https://nahuel61920.github.io/EveryRunning/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/EveryRunning" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-5.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Premier Food</h3>
                            <p>
                                Fast food
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Sass
                            </p>
                            <a href="https://nahuel61920.github.io/PremierFood/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/PremierFood" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-8.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>ShopTec</h3>
                            <p>
                                Ecommerce
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> Sass
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://nahuel61920.github.io/shop-tec/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/shop-tec" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-10.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Elegant Hand</h3>
                            <p>
                                Watch Shop
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://nahuel61920.github.io/ElegantHand/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/ElegantHand" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-9.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Vida en papel</h3>
                            <p>
                                Bookstore
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://nahuel61920.github.io/vida-en-papel/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/vida-en-papel" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-11.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Plus Anime</h3>
                            <p>
                                Anime website
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://nahuel61920.github.io/PlusAnime/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/PlusAnime" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);