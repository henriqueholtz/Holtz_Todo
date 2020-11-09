import React from 'react';
import NavBar from './Navbar';
import TodoList from './TodoList';
import TodoContext from './TodoContext';

const App = () => {
    return (
        <TodoContext>
            <div className="uk-container">
                <NavBar></NavBar>
                <TodoList></TodoList>
            </div>
        </TodoContext>
    )
}

export default App;