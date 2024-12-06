import React from 'react';


const ProjectSection = () => {
  return (
    <section id="projects">
        <div className="container">
            <h2 className="section-heading text-center">Projects</h2>
            <div className="row justify-content-center mt-4 gy-4" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-4 col-md-6">
                    <div className="card project-card">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="col-2">
                                    <img src="/src/components/Zerodha-logo.png" className="img-fluid icon" alt="Zerodha Logo"/>
                                </div>
                                <div className="col-7 p-0">
                                    <a href="https://github.com/Ananya-Yadav-Dev/Zerodha-Clone.git" className="card-title title" target="_blank">Zerodha Clone</a>
                                    <p className="stacks m-0">HTML | CSS | Mongodb | JS + NodeJS</p>
                                </div>
                                <div className="col-3 align-middle">
                                    <a href="https://github.com/Ananya-Yadav-Dev/Zerodha-Clone.git" className="btn btn-sm primary-bg-btn rounded-5" target="_blank">Visit ➡️</a>
                                </div>
                            </div>
                        </div>
                        <div className="description-container">
                            <p className="description">Offering low-cost trading, and investing services through its advanced online platform.</p>
                        </div>
                        <div className="banner-container">
                            <div className="overlay">
                                <a href="https://github.com/Ananya-Yadav-Dev/Zerodha-Clone.git" className="btn" target="_blank"><i className="bi bi-arrow-up-right-circle-fill"></i></a>
                            </div>
                            <img src="/src/components/Zerodha.png" className="card-img-top banner" alt="Zerodha Banner"/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="card project-card">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="col-2">
                                    <img src="/src/components/Wanderlust-logo.jpg" className="img-fluid icon" alt="WanderLust Logo"/>
                                </div>
                                <div className="col-7 p-0">
                                    <a href="https://github.com/Ananya-Yadav-Dev/WandarLust.git" className="card-title title" target="_blank">WanderLust</a>
                                    <p className="stacks m-0">HTML | CSS | Mongodb | JS + NodeJS</p>
                                </div>
                                <div className="col-3 align-middle">
                                    <a href="https://github.com/Ananya-Yadav-Dev/WandarLust.git" className="btn btn-sm primary-bg-btn rounded-5" target="_blank">Visit ➡️</a>
                                </div>
                            </div>
                        </div>
                        <div className="description-container">
                            <p className="description">WanderLust is a global platform that connects travelers with hosts offering unique accommodations and experiences.</p>
                        </div>
                        <div className="banner-container">
                            <div className="overlay">
                                <a href="https://github.com/Ananya-Yadav-Dev/WandarLust.git" className="btn" target="_blank"><i className="bi bi-arrow-up-right-circle-fill"></i></a>
                            </div>
                            <img src="/src/components/Wanderlust.png" className="card-img-top banner" alt="WanderLust Banner"/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="card project-card cursor-not-allowed">
                        <div className="card-body ">
                            <div className="d-flex align-items-center">
                                <div className="col-2">
                                    <img src="/src/assets/projects/simplcalc-icon.png" className="img-fluid icon" alt="SimplCalc Icon"/>
                                </div>
                                <div className="col-7 p-0">
                                    <span className="card-title title">SimplCalc</span>
                                    <p className="stacks m-0">HTML | CSS | JS</p>
                                </div>
                                <div className="col-3 align-middle">
                                    <a href="" className="btn btn-sm primary-bg-btn rounded-5" target="_blank">Visit ➡️</a>
                                </div>
                            </div>
                        </div>
                        <div className="description-container">
                            <p className="description">Tired of calculating manually? SimplCalc is best and faster solution.</p>
                        </div>
                        <div className="banner-container cursor-not-allowed">
                            <div className="overlay">
                                <i className="bi bi-hourglass-split"></i>
                            </div>
                            <img src="/src/assets/projects/simplcalc-banner.webp" className="card-img-top banner" alt="SimplCalc Banner"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ProjectSection;
