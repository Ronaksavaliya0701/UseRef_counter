import { useState } from "react"

function Dynamic(){

    const [inputlist, setinputlist] = useState ([{
        fname:'',
        lname:''
      
    }])
    
    const handleAdd = (e)=>{
        setinputlist([...inputlist,{
            fname:'',
            lname:''
            

        }])
    }

    const handleRemove = (e,id) =>{
        let newlist = inputlist.filter((input,index)=>{
            return id != index
        })
        setinputlist(newlist)
    }





    return(
        <> 
            <div className="container"  style={{margin:'0 auto',marginTop:50,background:'gray',padding:20,  borderRadius:20}}>

                <h1 style={{textAlign:"center"}}>
                    Dynamic Form
                </h1>

                <form className="row g-3" style={{padding:50}}>

                    {
                        inputlist.map((input,index)=>{
                            return(
                                <>
                                    <div class="col-md-4">
                                        <label  className="form-label">Fname</label>
                                        <input type="text" className="form-control" name="fname" ></input>
                                    </div>
                                    <div class="col-md-4">
                                        <label  className="form-label">Lname</label>
                                        <input type="text" className="form-control" name="lname"></input>
                                    </div>
                                   
                                    <div class="col-4">
                                        <button type="button" className="btn btn-primary">Submit</button>
                                        <button type="button" className="btn btn-danger" onClick={(e)=>{handleRemove(e,index)}} disabled={inputlist.length<=1}>Remove</button>
                                    </div>
                                    
                                </>
                                
                            )
                        })
                    }                
                </form> 
                <div class="col-12" style={{paddingLeft:50}}>
                    <button type="button" className="btn btn-primary" onClick={handleAdd}>Add More</button>
                </div>  
            </div>         
        </>
    )
}

export default Dynamic