import React from 'react';
import { create } from 'react-test-renderer';
import AllTodos from '../Components/AllTodos';
import sampleTodos from '../sampleTodos.json';
import Todo from '../Components/Todo';
import TodoModel from '../Components/utils/Todo.model';

test(`it should render the correct number of Todo components based on the todo array supplied`, () => {
    const sampleTodosLength = sampleTodos.length;
    const testRenderer = create(<AllTodos />);
    const testInstance = testRenderer.root;
    const tableBody = testInstance.findByType(`tbody`);
    expect(tableBody.children.length).toEqual(sampleTodosLength);
})

jest.mock('../Components/utils/Todo.model', () => {
    return function() {
        return class TodoModel {
            constructor() {
              this.todoDescription = `Test Todo`;
              this.todoDateCreated = `2019-05-04T15:30:00.000Z`;
              this.todoCompleted = true;
              this._id = 0;
            }
        }    
    }
})

test(`it should render 2 tds with className completed if props.todo.todoCompleted is true`, () => {
    const testTodo = new TodoModel();
    const testRenderer = create(<Todo todo={testTodo} />)
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType(`td`);
    for(let i = 0; i < cells.length-1; i++) {
        expect(cells[i].props.className).toBe(`completed`);
    }
});