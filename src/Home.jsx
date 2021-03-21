import React from 'react';
import web from "../src/images/logo.jpg";

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h1>To make your Health with <strong className="brand-name">Yoga</strong></h1>
                        <h2 className="my-3">We are the team of Talented Expertise </h2>
                        <div className="mt-3">
                        <a href="" className="btn btn-primary"> Get started</a>
                        </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated" alt="No image sorry" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Home
