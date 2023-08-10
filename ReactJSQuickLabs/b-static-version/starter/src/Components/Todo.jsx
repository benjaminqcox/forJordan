import PropTypes from 'prop-types';
import React from 'react';
import TodoModel from './utils/Todo.model';

const Todo = ({todo}) => {
    const dateCreated = new Date(todo.todoDateCreated).toLocaleDateString();
    const completedClassName = todo.todoCompleted ? 'completed' : '';
    let completed;
    if (todo.todoCompleted) {
        completed = 'N/A';
    } else {
        completed = <a href='/'>Edit</a>;
    }
    return (
        <tr>
            <td className={completedClassName}>{dateCreated}</td>
            <td className={completedClassName}>{todo.todoDescription}</td>
            <td>{completed}</td>
        </tr>
    );
};

Todo.propTypes = {
    todo: PropTypes.instanceOf(TodoModel)
};

export default Todo;