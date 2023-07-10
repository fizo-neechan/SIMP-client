import React from 'react'
import aboutImage from '../img/about-img.png'
import '../css/about.css'

const About = () => {
  return (
    <section className="about-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-6 about-text">
                    <h2>What is Stock?</h2>
                    <h5>Stocks are a revolutionary way for individuals to invest in companies and participate in the growth of the global economy.</h5>
                    <p>Stocks have played a significant role in shaping modern capitalism and have become an integral part of the global financial system. Through stock ownership, investors can enjoy potential gains in value, regular dividend payments, and a voice in important corporate decisions.</p>
                    <a href="" className="site-btn sb-gradients sbg-line mt-5">Get Started</a>
                </div>
            </div>
            <div className="about-img">
                <img src={aboutImage} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default About
