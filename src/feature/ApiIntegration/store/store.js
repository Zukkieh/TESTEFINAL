  
import { persist, thunk } from 'easy-peasy';
import api from '../../../services/api';

export default {
    repos: persist({
        repos: [],
        setRepos: thunk(async (actions, payload, { getState }) => {
            const repos = await api.get('users/Zukkieh/repos');
            getState().repos = repos.data;
          })
    })
};
