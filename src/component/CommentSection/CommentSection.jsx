import React, { useEffect, useState } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

function getItem() {
    let info = JSON.parse(localStorage.getItem("user"));

    if (info != null) {
        return info;
    }
    else {
        return [];
    }
}



function Form() {

    const [inputValue, setInput] = useState({
        name: "",
        email: "",
        password: "",
        cource: ""
    });



    const [data, setData] = useState(getItem());
    const [isUpdate, setIsUpdate] = useState(false);
    const [isIndex, setIsIndex] = useState();




    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setInput({ ...inputValue, [name]: value })
    }

    // getItem();

    const handleSubmit = (e) => {
        e.preventDefault();


        if (isUpdate) {
            let newdata = [...data];
            newdata[isIndex] = inputValue;

            setData(newdata);
            setIsUpdate(false);
            setIsIndex(null);
        }
        else {
            let uid = data.length + 1;

            let newInput = { id: uid, ...inputValue }

            setData([...data, newInput]);

        }

        setInput({
            name: "",
            email: "",
            password: "",
            cource: ""
        })
    }


    const handleUpdate = (id, index) => {
        let newdata = getItem();


        let newItem = newdata.filter((d) => {
            return d.id == id
        }) 
        setInput(newItem[0]);
        setIsUpdate(true);
        setIsIndex(index);


    }

    const handledelete = (id) => {
        let newdelete = getItem();
        let newItem = newdelete.filter((d) => {
            return d.id != id
        }) 

        setData(newItem);

    }





    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(data));
    }, [data])


    return (
        <>



            <body>
                <div className="registration">
                    <header>
                        <h1 id="title">Student Registration</h1>
                    </header>
                    <form id="survey-form" onSubmit={handleSubmit}>
                        <label id="name-label" className="top-label">Name: </label>
                        <input className="top-input" type="text" name="name" placeholder="Enter your name" value={inputValue.name} onChange={handleChange}></input>

                        <label id="email-label" className="top-label">Email: </label>
                        <input className="top-input" type="text" name="email" placeholder="Enter your email" value={inputValue.email} onChange={handleChange} ></input>

                        <label id="email-label" className="top-label">Password : </label>
                        <input i className="top-input" type="text" name="password" placeholder="Enter your Password" value={inputValue.password} onChange={handleChange} ></input>

                        <label id="email-label" className="top-label">Cource : </label>
                        <input className="top-input" type="text" name="cource" placeholder="Enter your Cource" value={inputValue.cource} onChange={handleChange} ></input>

                        <button type="submit" className="button">Submit</button>


                    </form>


                    <div className="table-container">

                        <table className="table1">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Password</td>
                                    <td>Cource</td>
                                    <td>Action</td>
                                </tr>
                            </thead>

                            {
                                data.map((d, index) => {
                                    return (
                                        <>
                                            <tbody className="tbody">

                                                <tr>
                                                    <td>{d.name}</td>
                                                    <td>{d.email}</td>
                                                    <td>{d.password}</td>
                                                    <td>{d.cource}</td>
                                                    <td>
                                                        <button type="button" value="submit" onClick={(e) => handleUpdate(d.id, index)}>Update</button>
                                                        <button type="button" value="submit" onClick={(e) => handledelete(d.id)}>Delete</button>

                                                    </td>

                                                </tr>
                                            </tbody>

                                        </>
                                    )
                                })
                            }
                        </table>

                    </div>
                </div>

            </body>

        </>
    )
}

export default Form