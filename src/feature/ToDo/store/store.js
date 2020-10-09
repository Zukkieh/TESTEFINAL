  
import { action, persist } from 'easy-peasy';

export default {
    todos: {
        todo: [],
        setTodo: action((state, payload) => {
            state.todo.push(payload);
        })
    },
    persistedTodos: persist({
        persistedTodo: [],
        setPersistedTodo: action((state, payload) => {
            state.persistedTodo.push(payload);
        })
    })
};
