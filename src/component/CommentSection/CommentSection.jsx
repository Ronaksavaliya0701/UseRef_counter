import React, { useEffect, useState } from 'react'

            // localStorage

    const getData = ()=>{
    let getdata = JSON.parse(localStorage.getItem("data"));

    if(getdata != null){
        return getdata;
    }
    return [];
}

                    // sessionStorage

//     const getData = ()=>{
//     let getdata = JSON.parse(sessionStorage.getItem("data"));
 
//      if(getdata != null){
//          return getdata;
//      }
//      return [];
//  }

function CommentSection() {

    const [inputList, setinputList] = useState({
        fname: '',
        lname: '',
        cname: ''
    });

    const [viewData, setviewData] = useState(getData());

    const handlechange = (e) => {
        let name = e.target.name;
        let value = e.target.value

        setinputList({ ...inputList, [name]: value })
        // console.log("name",name);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("click");

        let name = inputList
        // console.log("name",name);
        setviewData([...viewData, name]);

        setinputList({
            fname: '',
            lname: '',
            cname: ''
        });

        
    }

            // localStorage 

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(viewData));
        console.log("hello");
    },[viewData])

    // useEffect(()=>{
    //     sessionStorage.setItem("data",JSON.stringify(viewData));
    //     console.log("hello");
    // },[viewData])
    
    return (
        <>
            <div className='container'>
                <h1>
                    CommentSection
                </h1>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className='col-md-6'>
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" name='fname' value={inputList.fname} onChange={handlechange} />
                    </div>
                    <div className='col-md-6'>
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" name='lname' value={inputList.lname} onChange={handlechange} />
                    </div>
                    <div className="comment">
                        <label className="form-label">Comments</label>
                        <textarea className="form-control" placeholder="Comment here" name='cname' value={inputList.cname} onChange={handlechange}></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

            <div className="container">
                <div className="row">
                    {
                        viewData.length >= 1 ?
                            viewData.map((d) => {
                                // console.log(val);
                                return (
                                    <>
                                        <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100">

                                           
                                            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                                <div className="toast-header">
                                                        <strong className="me-auto">
                                                            {
                                                                d.fname + " "+ d.lname
                                                            }
                                                        </strong>
                                                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                                </div>
                                                <div className="toast-body">
                                                    {
                                                        d.cname
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                            : ""
                    }

                </div>
            </div>
        </>

    )
}

export default CommentSection;