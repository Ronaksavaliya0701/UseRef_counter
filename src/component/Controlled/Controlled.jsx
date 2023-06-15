import React, { useState } from "react"

function Controlled(){

    const [inputvalue , setInput] = useState(''); 

    const handleChange = (e) =>{
        e.preventDefault();
        setInput(e.target.value)
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        setInput('');
        console.log(inputvalue);

    }

    return(
        <>
            <div>
                <h1>
                    Controlled
                </h1>
                <form onSubmit={handlesubmit}>
                    <label>name</label>
                    <input type="text" value={inputvalue} onChange={handleChange}  name="fname"></input>

                    <input type="submit" value="submit" />
                </form>
                <h1>
                    {
                        inputvalue
                    }
                </h1>
            </div>
        </>
    )
}

export default Controlled