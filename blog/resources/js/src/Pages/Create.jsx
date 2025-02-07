import React, { useState } from "react";

const Create = ()=>{
    const [title,settitle]= useState    ("");
    const [description,setdescription]= useState("");

    function ChangeHandeler(event){
        // console.log(event.target.value);
        if(event.target.name === "title"){
            settitle(event.target.value);
        }
        else if(event.target.name === "body"){
            setdescription(event.target.value);
        }

    }
    function CretePost(){
        console.log(title,description);
        fetch('http://127.0.0.1:8000/api/posts',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify({
                title:title,
                body:description
            })
        }).then((response)=>{
            console.log(response);
        })
    }
    return (
         
        <div className="container">
            <h3>Create Post</h3>
            <a className="btn btn-secondary" href="#">Back</a>
            <form action="">
                <div className="form-group">
                    <label htmlFor="">title</label>
                    <input className="form-control" type="text" onChange={ChangeHandeler} name="title" id="" />
                </div>
                <div className="form-group">
                    <label htmlFor="">DESCRIPTION</label>
                    <textarea className="form-control" onChange={ChangeHandeler} name="body" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={CretePost}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Create;