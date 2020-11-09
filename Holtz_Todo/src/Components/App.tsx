import React from 'react';
import NavBar from './Navbar';
import TodoList from './TodoList';
import TodoContext from '../Contexts/TodoContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddTodo from './AddTodo';

const App = () => {
    return (
        <TodoContext>
            <Router>
                <NavBar></NavBar>
                    <br />
                    <div className="uk-container">
                        <Switch>
                            <Route path="/create">
                                <AddTodo></AddTodo>
                            </Route>
                            <Route path="/">
                                <h4> My Tasks </h4>
                                <TodoList></TodoList>
                            </Route>
                        </Switch>
                    </div>
            </Router>
        </TodoContext>
    )
}

export default App;