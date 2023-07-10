import React from 'react'
import '../css/process.css'
import processIcon1 from '../img/process-icons/1.png'
import processIcon2 from '../img/process-icons/2.png'
import processIcon3 from '../img/process-icons/3.png'

const Process = () => {
  return (
    <section className="process-section spad">
		<div className="container">
			<div className="section-title text-center">
				<h2>Get Started With Stocks</h2>
				<p>Start learning about Stock with interactive tutorials. It’s fun, easy, and takes only a few minutes! </p>
			</div>
			<div className="row">
				<div className="col-md-4 process">
					<div className="process-step">
						<figure className="process-icon">
							<img src={processIcon1} alt="#"/>
						</figure>
						<h4>Search Your Stock</h4>
						<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
					</div>
				</div>
				<div className="col-md-4 process">
					<div className="process-step">
						<figure className="process-icon">
							<img src={processIcon2} alt="#"/>
						</figure>
						<h4>Predict its value</h4>
						<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
					</div>
				</div>
				<div className="col-md-4 process">
					<div className="process-step">
						<figure className="process-icon">
							<img src={processIcon3} alt="#"/>
						</figure>
						<h4>Invest accordingly!</h4>
						<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Process
