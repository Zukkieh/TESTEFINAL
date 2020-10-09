  
import { action, persist } from 'easy-peasy';

export default {
    counter: {
        count: 0,
        setCount: action((state, payload) => {
            state.count = payload;
        })
    },
    persistedCounter: persist({
        persistedCount: 0,
        setPersistedCount: action((state, payload) => {
            state.persistedCount = payload;
        })
    })
};
