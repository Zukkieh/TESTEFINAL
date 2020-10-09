import React, { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
// import './ToDo.css'

const ToDo = () => {

    const [text, setText] = useState('');
    const [checked, setChecked] = useState(false);

    const todos = useStoreState(state => state.todoModel.todos.todo);
    const setTodo = useStoreActions(state => state.todoModel.todos.setTodo);
    const persistedTodo = useStoreState(state => state.todoModel.persistedTodos.persistedTodo);
    const setPersistedTodos = useStoreActions(state => state.todoModel.persistedTodos.setPersistedTodo);

    const data = todos.concat(persistedTodo).sort((a, b) => a.localeCompare(b));

    const handleAddTodo = (todoText, isChecked) => {
        isChecked ? setPersistedTodos(`${todoText} *`) : setTodo(todoText)
    }

    return (
        <>
            <div>
                <input onChange={(val) => setText(val.target.value)}/>
                <input type="checkbox" checked={checked} onChange={() => setChecked(old => !old)}/>
                <button onClick={() => handleAddTodo(text, checked)}>Add todo</button>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                    data.length !== 0 && data.map((todo, index) => (
                        <span key={index}>
                            {todo}
                        </span>
                    ))
                }
            </div>
        </>
    );
}

export default ToDo;
