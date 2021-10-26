import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

// Функция combineReducers компонует все reducer, все функции по обработке данных в state, принимает объект с reducer
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

// Функция createStore создает весь тот store который мы писали
// У него есть те методы getState, dispatch и т.д.
// Передаем скомпонованные reducers в функцию
let store = createStore(reducers);

export default store;