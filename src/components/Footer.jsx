import simpLogo from '../img/logo.png'
import '../Pages/css/font-awesome.min.css'
import '../css/footer.css'

const Footer = () => {
  return (
    <footer className="footer-section">
        <div className="container">
            <div className="row spad">
                <div className="col-md-6 col-lg-3 footer-widget">
                    <img src={simpLogo} className="mb-4" alt=""/>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.</p>
                    <span>
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://www.linkedin.com/in/sherry-ahmad/" target="_blank">Shehryar Ahmad</a>
    </span>
                </div>
                <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
                    <h5 className="widget-title">Resources</h5>
                    <ul>
                        <li><a href="#">How to Buy Stocks</a></li>
                        <li><a href="#">Stocks Overview</a></li>
                        <li><a href="#">Blog News</a></li>
                        <li><a href="#">How to Sell Stocks</a></li>
                        </ul>
                </div>
                <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
                    <h5 className="widget-title">Quick Links</h5>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">Stocks</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                </div>
                <div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
                    <h5 className="widget-title">Follow Us</h5>
                    <div className="social">
                        <a href="" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="" className="google"><i className="fa fa-google-plus"></i></a>
                        <a href="" className="instagram"><i className="fa fa-instagram"></i></a>
                        <a href="" className="twitter"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="row">
                    <ul className="footer-nav">
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Privacy Policy </a></li>
                        <li><a href="">m.shehryarahmad@gmail.com</a></li>
                        <li><a href="">+92 3219892344</a></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
