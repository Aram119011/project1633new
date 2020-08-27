import {combineReducers, createStore} from 'redux';
import {AuthReducer} from "./Selectors/Ayu-Selector";


const reducers = combineReducers({
    auth: AuthReducer,
});


const store = createStore(reducers);


export default store;
