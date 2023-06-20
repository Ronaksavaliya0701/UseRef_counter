import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cart from '../../counter-master/src/component/Cart/Cart'
import Uncontroled from '../../counter-master/src/component/Uncontroled/Uncontroled'
import Controlled from '../../counter-master/src/component/Controlled/Controlled'
import Dynamic from '../../counter-master/src/component/Dynamic/Dynamic'
import './index.css'
import UseDetails from './component/UseDetails/UseDetails';
import CommentSection from './component/CommentSection/CommentSection';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Cart/> */}
    {/* <Uncontroled/> */}
    {/* <Controlled/> */}
    {/* <UseDetails/> */}
    {/* <Dynamic/> */}
    <CommentSection/>
  </React.StrictMode>,
)
