import {createStore} from 'redux';
import { tokenReducer } from './token/tokenReducer';

const store = createStore(tokenReducer);

export default store;