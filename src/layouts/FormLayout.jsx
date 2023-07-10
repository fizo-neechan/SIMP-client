import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const FormLayout = () => {
  return (
    <>
        <section id="forms" className="hero-section">
          <div className="container">
              <div className="form-content">
                <Outlet/>
              </div>
          </div>
        </section>

        <Footer/>
    </>
  )
}

export default FormLayout
