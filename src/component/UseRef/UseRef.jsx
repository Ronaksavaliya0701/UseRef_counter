import React,{useRef} from "react";

function UseRef(){

    const iref = useRef(0)

    const inc =() =>{
        iref.current.innerHTML = parseInt(iref.current.innerHTML)+1;
    }

    const dec = () =>{
        if(iref.current.innerHTML > 1){
            iref.current.innerHTML = parseInt(iref.current.innerHTML)-1;
        }
        
    }
  
    return(
        <React.Fragment>
            
            <button  style={{margin: 10}} onClick={inc}>+</button>
            <span ref={iref}>
                {
                    iref.current
                }
            </span>
            <button  style={{margin: 10}} onClick={dec}>-</button>
           
        </React.Fragment>
    )
}

export default UseRef;