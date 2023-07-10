import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Nav />

        <section className="page-info-section">
            <div className="container">

            </div>
        </section>

      <main>
        <Outlet/>
      </main>

      <Footer/>
    </div>
  )
}

export default RootLayout
