import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Nav />

      <main>
        <Outlet/>
      </main>

      <Footer/>
    </div>
  )
}

export default RootLayout
