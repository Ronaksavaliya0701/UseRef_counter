import React from "react"

function Uncontroled(){

    const handleChange = (e) =>{

        e.preventDefault();
        console.log(e.target.name.value);
    }
    return(
        <>
            <div>
                <h1>
                    Uncontrolled
                </h1>
                <form onSubmit={handleChange}>
                    <label>name</label>
                    <input type="text" name="name"></input>

                    <input type="submit" value="submit" />
                </form>
            </div>
        </>
    )
}

export default Uncontroled

