  
import { persist, thunk } from 'easy-peasy';
import api from '../../../services/api';

export default {
    people: persist({
        people: [],
        setPeople: thunk(async (actions, payload, { getState }) => {
            const repos = await api.get('users/Zukkieh/repos');
            getState().people = repos.data;
          })
    })
};
