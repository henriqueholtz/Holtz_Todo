import React, { createContext } from 'react';
import { TodoContextType } from '../Contexts/TodoContextType';
import { Todo } from '../Models/Todo';

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});

const TodoProvider = (props: any) => {
    const todos: Todo[] = [
        {id:1, title:'Title 1', done: true },
        {id:2, title:'Title 2', done: false }
    ]

    const addTodo = (title: string) => {
        console.log('addTodo' + title)
    }

    const removeTodo = (todo: Todo) => {
        console.log('removeTodo' + todo.title)
    }

    const toggle = (todo: Todo) => {
        console.log('toggle' + todo.title)
    }

    
    return(
        <TodoContext.Provider value={
            {
                todos, addTodo, removeTodo, toggle
            }
        }>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;
