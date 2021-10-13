import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, likes: 15, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, a.", avatarUrl: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" },
  { id: 2, likes: 10, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas provident soluta voluptates culpa autem est!", avatarUrl: "https://images.unsplash.com/photo-1633824911018-519ad10f2b69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" },
  { id: 3, likes: 21, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas provident soluta.", avatarUrl: "https://images.unsplash.com/photo-1634020016130-ab5eca714e69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" },
]

let dialogs = [
  { id: 1, name: "Name 1" },
  { id: 2, name: "Name 2" },
  { id: 3, name: "Name 3" },
  { id: 4, name: "Name 4" },
  { id: 5, name: "Name 5" },
  { id: 6, name: "Name 6" },
  { id: 7, name: "Name 7" },
]

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Lorem ipsum dolor sit amet." },
  { id: 3, message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
  { id: 4, message: "Lorem, ipsum dolor." },
]

ReactDOM.render(
  <React.StrictMode>
    <App dataMessages={messages} dataDialogs={dialogs} dataPosts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
