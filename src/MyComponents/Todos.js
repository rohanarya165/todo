import React from 'react'
import { TodoItems } from './TodoItems';

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "10px auto"
    }
    return ( 
        <div className="container " style={myStyle}>
            <h3 className="text-center"> Todos List </h3>
            {   props.todos.length===0 ? "ADD Todos to your list" :
                props.todos.map((todo) => {
                return (<>

                < TodoItems todo = { todo } key={todo.sno} onDelete = { props.onDelete } /> <hr/>

                </>)

})}


        </div>
    )
}
