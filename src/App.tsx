// import React from 'react'; 
import './App.scss'
import { Route } from './router/Route'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>

      <Route />
   
    <ToastContainer/>
    </>
  )
}

export default App
