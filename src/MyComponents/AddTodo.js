import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("title and desc both are required to be filled")
        }
       else{
        props.addTodo(title, desc);
        setTitle("")
        setDesc("")
       }
    }



    return (
        <div className="container">
            <br />
            <h3>Add todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" class="form-label">Todo title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" id="title" aria-describedby="emailHelp" />
                   
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" class="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} class="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
