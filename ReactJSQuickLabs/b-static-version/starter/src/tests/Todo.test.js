import React from 'react';
import { create } from 'react-test-renderer';
import Todo from '../Components/Todo';
import TodoModel from '../Components/utils/Todo.model';

jest.mock('../Components/utils/Todo.model', () => {
    return class TodoModel {
        constructor() {
            this.todoDescription = `Test Todo`;
            this.todoDateCreated = `2019-05-04T15:30:00.000Z`;
            this.todoCompleted = true;
        }
    }    
})

test(`it should render 2 tds with className completed if props.todo.todoCompleted is true`, () => {
    const testTodo = new TodoModel();
    const testRenderer = create(<Todo todo={testTodo} />);
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType(`td`);
    for(let i = 0; i < cells.length-1; i++) {
        expect(cells[i].props.className).toBe(`completed`);
    }
});

test(`it should render 2 tds with className '' if props.todo.todoCompleted is false`, () => {
    const testTodo = new TodoModel();
    testTodo.todoCompleted = false;
    const testRenderer = create(<Todo todo={testTodo} />);
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType(`td`);
    for(let i = 0; i < cells.length-1; i++) {
        expect(cells[i].props.className).toBeFalsy();
    }
});

test(`it should render 1 td with a child of N/A if props.todo.action is N/A`, () => {
    const testTodo = new TodoModel();
    const testRenderer = create(<Todo todo={testTodo} />);
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType(`td`);
    for(let i = cells.length-1; i < cells.length; i++) {
        expect(cells[i].children).toContain(`N/A`);
    }
});

test(`it should render 1 td with a child of false if props.todo.action is Edit`, () => {
    const testTodo = new TodoModel();
    testTodo.todoCompleted = false;
    const testRenderer = create(<Todo todo={testTodo} />)
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType(`a`);
    for(let i = cells.length-1; i < cells.length; i++) {
        expect(cells[i].children).toContain(`Edit`);
    }
});