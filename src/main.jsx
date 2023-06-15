import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cart from '../../counter-master/src/component/Cart/Cart'
import Uncontroled from '../../counter-master/src/component/Uncontroled/Uncontroled'
import Controlled from '../../counter-master/src/component/Controlled/Controlled'
import './index.css'
import UseDetails from './component/UseDetails/UseDetails';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Cart/> */}
    {/* <Uncontroled/> */}
    {/* <Controlled/> */}
    <UseDetails/>
  </React.StrictMode>,
)
