import React, { useState } from "react";

function UseDetails(){

    const [data,setdata]= useState({
        fname:'',
        lname:'',
        email:'',
        address:'',
        phone:''
    })

    const [Show ,setShow] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setShow(data);
    }

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setdata({
            ...data,
            [name] : value
        })
    }



    return(
        <>
            <h1 style={{textAlign:"center"}}>User Details</h1>
            <form class="row g-3" onSubmit={handleSubmit} style={{width:700,margin:'0 auto',marginTop:50,background:'gray',padding:20}}>
                <div class="col-md-6">
                    <label  class="form-label">Fname</label>
                    <input type="text" class="form-control" name="fname" value={data.fname} onChange={handleChange} ></input>
                </div>
                <div class="col-md-6">
                    <label  class="form-label">Lname</label>
                    <input type="text" class="form-control" name="lname" value={data.lname} onChange={handleChange}></input>
                </div>
                <div class="col-6">
                    <label  class="form-label">Email</label>
                    <input type="text" class="form-control"name="email" value={data.email} onChange={handleChange}></input>
                </div>
                <div class="col-6">
                    <label  class="form-label">Address</label>
                    <input type="text" class="form-control" name="address" value={data.address} onChange={handleChange}></input>
                </div>
                <div class="col-6">
                    <label  class="form-label">Age</label>
                    <input type="text" class="form-control" name="age" value={data.age}  onChange={handleChange}></input>
                </div>
                <div class="col-md-6">
                    <label  class="form-label">Contact no.</label>
                    <input type="text" class="form-control" name="phone" value={data.phone} onChange={handleChange}></input>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>

            {
                Show != null ?
                <>
                    <h2>
                        {
                            Show.fname + " " + Show.lname
                        }
                    </h2>
                    <h2>
                        {
                            Show.email
                        }
                    </h2>
                    <h2>
                        {
                            Show.address
                        }
                    </h2>
                    <h2>
                        {
                            Show.phone
                        }
                    </h2>
                </>
                   :
                    <h2>
                        not found
                    </h2>
            }   
        </>
    )
}

export default UseDetails