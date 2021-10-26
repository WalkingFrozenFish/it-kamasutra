import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from "./redux/state";
import store from "./redux/redux-store";


let rerenderEntireTree = (state) => {
    debugger
    ReactDOM.render(
        <React.StrictMode>
            {/* Записываем в props, импортируемую функцию для обновления state */}
            <App
                // Вызываем getState, что бы получить сам state, а не текст метода getState
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// Вызываем getState, для получения самого state
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
