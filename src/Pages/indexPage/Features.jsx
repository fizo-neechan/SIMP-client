import React from 'react'
import '../css/features.css'
import '../css/themify-icons.css'


const Features = () => {

    const features = [
        {
            id: 1,
            name: "Mobile Apps",
            text: "Stock is the simplest way to exchange money at very low cost.",
            icon: `ti-mobile`,
            status: "Coming Soon"
        },
        {
            id: 2,
            name: "Safe & Secure",
            text: "Your security is our top priority. We use advanced encryption and authentication technologies to ensure that your personal and financial information is always protected.",
            icon: "ti-shield",
        },
        {
            id: 3,
            name: "Wallet",
            text: "Our wallet feature allows you to easily store and manage your cryptocurrencies and other digital assets in one place.",
            icon: "ti-wallet",
            status: "Coming Soon"
        },
        {
            id: 4,
            name: "Expert Support",
            text: "Our team of investment experts is available to provide guidance and support, helping you make informed investment decisions.",
            icon: "ti-headphone-alt",
        },
        {
            id: 5,
            name: "Learn to Invest Right",
            text: `Investing in stocks is a great way to grow your wealth over time, but it can also be intimidating if you're new to the world of investing. Our "Learn to Invest in Stocks" program is designed to help you get started with confidence.`,
            icon: "fas fa-chart-line",
        },
        {
            id: 6,
            name: "Recuring Buys",
            text: "Our recurring buys feature will allow you to automatically purchase a set amount of stocks at regular intervals, helping you to build your investment portfolio over time.",
            icon: "ti-panel",
            status: "Coming Soon"
        }
    ]


  return (
    <section className="features-section spad gradient-bg">
		<div className="container text-white">
			<div className="section-title text-center">
				<h2>Our Features</h2>
				<p></p>
			</div>
			<div className="row">
                {features.map((feature) => (
                    <div className="col-md-6 col-lg-4 feature pb-4" key={feature.id}>
                        <i className={feature.icon}/>
                        <div className="feature-content">
                            <h4>{feature.name}</h4>
                            <p>{feature.text}</p>
                            <a href="#" className="readmore">{feature.status}</a>
                        </div>
                    </div>
                ))}
			</div>
		</div>
	</section>
  )
}

export default Features
