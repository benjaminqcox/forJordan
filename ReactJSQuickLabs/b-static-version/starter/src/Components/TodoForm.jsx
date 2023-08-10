import DateCreated from "./utils/DateCreated";
import React from 'react';

const TodoForm = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="todoDescription">Description:&nbsp;</label>
                <input 
                    type="text" 
                    name="todoDescription" 
                    className="form-control" 
                    placeholder="Todo Description" 
                />
            </div>
            <div className="form-group">
                <label htmlFor="todoDateCreated">Created on:&nbsp;</label>
                <DateCreated />
            </div>
            <div className="form-group">
                <label htmlFor="todoCompleted">Completed:&nbsp;</label>
                <input type="checkbox" name="todoCompleted" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default TodoForm;