import CSS from './css/AddEditTodo.css';
import TodoForm from './TodoForm';
import React from 'react';

const AddEditTodo = () => {
    return (
        <>
            <div className="addEditTodo">
            <tr>
                <h3>{`Add/Edit Todo`}</h3>
            </tr>
            </div>
            <TodoForm />
        </>

    )
}

export default AddEditTodo;