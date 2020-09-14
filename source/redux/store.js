import reducers from './reducers';
import {createStore} from 'redux';

function configureStore() {
  const store = createStore(reducers)
  return store;
}

const store = configureStore();
export default store;
