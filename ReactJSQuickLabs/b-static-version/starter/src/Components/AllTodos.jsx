import CSS from "./css/AllTodos.css"
import Todo from "./Todo";
import sampleTodos from "../sampleTodos.json";

import React from 'react';
import TodoModel from "./utils/Todo.model";


const AllTodos = () => {
    const todos = sampleTodos.map((currentTodo) => {
        const todo = <Todo key={currentTodo._id} todo={
            new TodoModel(
                currentTodo.todoDescription, 
                currentTodo.todoDateCreated, 
                currentTodo.todoCompleted,
                currentTodo._id
            )
        }/>;
         return todo;
    })
    return (
        <div className="row">
            <h3>{`Todo List`}</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>{`Date created`}</th>
                        <th>{`Description`}</th>
                        <th>{`Action`}</th>
                    </tr>
                </thead>
                <tbody>
                    {todos}
                </tbody>
            </table>
        </div>
    );
};

export default AllTodos;