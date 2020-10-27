import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';

function ToRenderEverything(){
    useEffect( () => {
        console.log("on-load");
    }, []);

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg fixed-top bg-dark" id="mainNav">
                <div className="container"><a href='https://nlamonaco86.github.io/reactPortfolio/#/' className="navbar-brand js-scroll-trigger">NICHOLAS LA MONACO</a>
                    <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><Link to={{hash: "#portfolio"}} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to={{hash: "#about"}} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">ABOUT</Link>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1"><Link to={{hash: "#contact"}} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="masthead bg-light text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <img className="masthead-avatar mb-5 rounded-circle" src="assets/img/me.jpg" alt="myself"/>
                    
                    <h1 className="masthead-heading mb-0 text-dark">I'm an aspiring web developer from New Jersey.</h1>
                </div>
            </header>

            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="page-section-heading text-secondary mb-0 d-inline-block">PORTFOLIO</h2>
                    </div>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-book-open"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row justify-content-center">
                        
                    <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/pwr" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src="assets/img/portfolio/powernine.png" alt="Card Trading App"/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/rt" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src="assets/img/portfolio/repairtracker.png" alt="repairTracker"/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/fsf" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src="assets/img/portfolio/fsfitness.png" alt="Fitness App"/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/mma" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src="assets/img/portfolio/mmaschool.png" alt="Martial Arts School Management"/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/irlm" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src="assets/img/portfolio/infiniterealms.png" alt="Gallery"/>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/pgen" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src="assets/img/portfolio/passgen.png" alt="password generator"/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="page-section bg-dark text-white mb-0" id="about">
                <div className="container">
                    
                    <div className="text-center" id="about">
                        <h2 className="page-section-heading d-inline-block text-white">ABOUT</h2>
                    </div>
                    
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-user"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 ml-auto">
                            <p className="pre-wrap lead">With a minimalist, lightweight approach,
                            I can create effective, efficient, user-friendly and enjoyable web applications for a wide
                            variety of uses. I learn quickly and I'm not afraid to try new ways of doing things.</p>
                        </div>
                        <div className="col-lg-4 mr-auto">
                            <p className="pre-wrap lead">My personal journey as a web developer has only just begun. I'm a lifelong learner and see every challenge as an opportunity to learn and grow.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section" id="contact">
                <div className="container">
                    
                    <div className="text-center">
                        <h2 className="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
                    </div>
                    
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-exclamation"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <div className="d-flex flex-column align-items-center">
                                <a className="icon-contact mb-3 bg-primary" href="tel:9083379307"><i className="fas fa-phone"></i></a>
                                <div className="text-muted">Phone</div>
                                <a className="lead font-weight-bold text-primary" href="tel:9083379307">(908) 337-9307</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex flex-column align-items-center">
                                <a className="icon-contact mb-3 bg-primary" href="mailto:nlamonaco86@gmail.com"><i className="far fa-envelope"></i></a>
                                <div className="text-muted">Email</div><a className="lead font-weight-bold text-primary" href="mailto:nlamonaco86@gmail.com">nlamonaco86@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer text-center bg-dark">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h4 className="mb-4">LOCATION</h4>
                            <p className="pre-wrap lead mb-0">Roselle Park, New Jersey</p>
                        </div>
                        
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h4 className="mb-4">LEARN MORE</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="http://github.com/nlamonaco86"><i className="fab fa-fw fa-github"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="./assets/resume.pdf"><i className="fas fa-file-pdf "></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/nicholas-la-monaco-98b5501b3/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default ToRenderEverything;