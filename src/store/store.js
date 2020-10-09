  
import { createStore } from 'easy-peasy';
import counterModel from '../feature/Counter/store/store';
import todoModel from '../feature/ToDo/store/store';
import reposModel from '../feature/ApiIntegration/store/store';

const models = {
    counterModel,
    todoModel,
    reposModel
};

export const store = createStore(models, {
  name: 'storeName'
});