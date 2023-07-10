import React from 'react'
import '../css/hero.css'
import laptopImg from '../img/laptop.png'

const Hero = () => {
  return (
	<section className="hero-section">
		<div className="container">
			<div className="row">
				<div className="col-md-6 hero-text">
					<h2>Invest in <span>Stocks</span> <br/>Stock Investment Predictor</h2>
					<h4>Use modern progressive technologies of Stocks to earn money</h4>
					<form className="hero-subscribe-from">
						<input type="text" placeholder="Enter your email"/>
						<button className="site-btn sb-gradients">Get Started</button>
					</form>
				</div>
				<div className="col-md-6">
					<img src={laptopImg} className="laptop-image" alt=""/>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Hero
