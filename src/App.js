import './App.css';
import Header from './MyComponents/Header'
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import About from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const onDelete = (todo) => {
    console.log("i am on delete");
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo");
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      //let sno = todos[todos.length - 1].sno + 1

    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to do this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to do this job done2"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the ghat to do this job done3"
    }

  ]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <><center>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />

              </center>
              </>
            )
          }}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>


        </Switch>






        <Footer />
      </Router>
    </>
  );
}

export default App;
