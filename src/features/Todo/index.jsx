import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

TodoFeature.propTypes = {
    
};
function TodoFeature(props) {
 const [todoList, setTodoList] = useState([
    {
        id: 1,
        name: 'Eat',
        status: 'new',
    },
    {
        id: 2,
        name: 'Sleep',
        status: 'complete',
    },
    {
        id: 3,
        name: 'Code',
        status: 'new',
    }
]);

    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        //tạo array mới
        const newTodoList = [...todoList];

        console.log(todo, idx);
        //chuyển đổi state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'complete' : 'new',
        };
        // cập nhật lại state
        setTodoList(newTodoList);

    }
    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }

    const handleShowCompleteClick = () => {
        setFilteredStatus('complete');
    }

    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

    const handleTodoFormSubmit = (values) => {
        console.log('Form Submit:', values);
    };

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onsubmit={handleTodoFormSubmit} /> 
            <h3>To do List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}/>
            <button onClick={handleShowAllClick}>Show All</button>
            <button onClick={handleShowCompleteClick}>Show Complete</button>
            <button onClick={handleShowNewClick}>Show New</button>
        </div>
    );
}

export default TodoFeature;