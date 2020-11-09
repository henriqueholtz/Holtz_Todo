import React, { useContext } from 'react';
import TodoListItem from './TodoListItem';
import { TodoContextType } from '../Contexts/TodoContextType';
import { TodoContext } from '../Contexts/TodoContext';

const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext);

    return (
        <table className="uk-table">
            <caption> Task List</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (
                            <TodoListItem key={todo.id} todo={todo} ></TodoListItem>
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default TodoList;