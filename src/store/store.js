  
import { createStore } from 'easy-peasy';
import counterModel from '../feature/Counter/store/store';
import todoModel from '../feature/ToDo/store/store';
import peopleModel from '../feature/ApiIntegration/store/store';

const models = {
    counterModel,
    todoModel,
    peopleModel
};

export const store = createStore(models, {
  name: 'storeName'
});