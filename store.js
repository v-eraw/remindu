// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Create this file to combine reducers

const store = createStore(rootReducer);

export default store;
