import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Index from './Pages/indexPage/Index';
import './css/global.css';
import './css/bootstrap.min.css'
import IndexLayout from './layouts/IndexLayout';
import MainLayout from './layouts/MainLayout';
import FormLayout from './layouts/FormLayout';
import Contact from './Pages/contactPage/Contact';
import Stocks from './Pages/stocksPage/Stocks';
import Company from './Pages/companyPage/Company';
import SignUp from './Pages/signupPage/SignUp';
import Login from './Pages/loginPage/Login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

axios.defaults.baseURL = "https://simp-api.onrender.com";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<IndexLayout/>}>
        <Route index element={<Index/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>
      <Route path='/stocks' element={<MainLayout />} >
        <Route index element={<Stocks/>} />
        <Route path=':companyName' element={<Company/>} />
      </Route>
      <Route path='/register' element={<FormLayout/>}>
        <Route index element={<SignUp/>}/>
      </Route>
      <Route path='/login' element={<FormLayout/>}>
        <Route index element={<Login/>}/>
      </Route>
    </>
  )
  )
  
  function App() {

    return (
      <>
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerClassName='toaster'
          toastOptions={{
            style: {
              padding: '1rem',
              color: '#20509e',
              width: "20rem",
            },
            iconTheme: {
              primary: '#20509e',
              secondary: '#FFFAEE',
            },

            error: {
              style: {
                color: "red",
              },
              iconTheme: {
                primary: "red"
              }
            },

            success: {
              style: {
                color: 'green',
              },
              iconTheme: {
                primary: 'green'
              }
            }
          }}
        />

        <RouterProvider router={router} />
      </>

  );
}

export default App;
