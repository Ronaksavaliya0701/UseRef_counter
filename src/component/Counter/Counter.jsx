import React, { useState } from 'react'

function Counter() {

    const [count , setCount] = useState(1)

    const inc =() =>{
        setCount(count + 1);
    }

    const dec = () =>{
        if(count > 1){
            setCount(count - 1);
        }
        
    }
    let price = 70000   
    let total = count * price;


  return (
    <div>
        <h5 style={{marginTop: 10}}>price :
            {price}
        </h5>
        <button onClick={inc}>+</button>
        <p>
            {
                count
            }
        </p>
        <button onClick={dec}>-</button>
        <h5 style={{marginTop: 10}}>Total price :
            {
                total
            }
        </h5>
    </div>
  )
}

export default Counter