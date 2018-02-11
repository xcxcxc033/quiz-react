import App from './../../App';
import { createStore, combineReducers } from 'redux';
import {currentQuestion, currentAnswer} from './../../redux/index.redux';
import React from 'react';
import { Provider } from 'react-redux';


const combineReducer = combineReducers({
    currentQuestion: currentQuestion,
    currentAnswer: currentAnswer
})


const store = createStore(
    combineReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export const Index = (
    (<Provider store = {store}>
        <App />
    </Provider>)
);