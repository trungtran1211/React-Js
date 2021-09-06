import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

function TodoList(props) {
    const {todoList,onTodoClick} = props;
    const hadleTodoClick = (todo, idx) =>{
        if(!onTodoClick) return;

        onTodoClick(todo, idx);
    }
    
    return (
        <div>
            <ul className="todo-list">
                {todoList.map((todo, idx) =>(
                    <li 
                    key={todo.id} 
                    className = {classNames({
                        'todo-item': true,
                        complete: todo.status === 'complete'
                    })}
                        onClick = {() => hadleTodoClick(todo, idx)}
                    >{todo.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;