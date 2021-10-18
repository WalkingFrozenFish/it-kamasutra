let rerenderEntireTree = () => {
    // Эта функция будет переопределена на функцию коллбек из subscribe
    console.log("render");
}

let state = {
    profilePage: {
        posts: [
            { id: 1, likes: 15, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, a.", avatarUrl: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" },
            { id: 2, likes: 10, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas provident soluta voluptates culpa autem est!", avatarUrl: "https://images.unsplash.com/photo-1633824911018-519ad10f2b69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" },
            { id: 3, likes: 21, message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas provident soluta.", avatarUrl: "https://images.unsplash.com/photo-1634020016130-ab5eca714e69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" },
        ],
        newPostText: "Some text"
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Name 1" },
            { id: 2, name: "Name 2" },
            { id: 3, name: "Name 3" },
            { id: 4, name: "Name 4" },
            { id: 5, name: "Name 5" },
            { id: 6, name: "Name 6" },
            { id: 7, name: "Name 7" },
        ],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Lorem ipsum dolor sit amet." },
            { id: 3, message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
            { id: 4, message: "Lorem, ipsum dolor." },
        ],
        newMessageText: "Some text",
    },
    sidebar: {
        friends: [
            { name: "Name 1", avatarUrl: "https://images.unsplash.com/photo-1634120882716-1397a555457f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" },
            { name: "Name 2", avatarUrl: "https://images.unsplash.com/photo-1634155119874-cab5d0665482?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80" },
            { name: "Name 3", avatarUrl: "https://images.unsplash.com/photo-1634148207567-8bca0dc4c6bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" },
        ],
    },
}

// Функция для добавления сообщения в список сообщений
export let addMessage = () => {
    // Создаем новый объект сообщения
    let newMessage = {
        id: 5,
        // Присваиваем обновляемый текст сообщения из state
        message: state.dialogsPage.newMessageText,
    }

    // Добавляем в state новый объект сообщения
    state.dialogsPage.messages.push(newMessage);
    // При добавлении текста затирать текст в поле ввода
    state.dialogsPage.newMessageText = "";
    // Рендерим страницу, передаем обновленный state
    rerenderEntireTree(state);
}

// Функция для обновления state, полученный newText записываем в state, и рендерим страницу
export let updateNewMessageText = (newText) => {
    // Записываем в state обновленное значение newText
    state.dialogsPage.newMessageText = newText;
    // Рендерим страницу, передаем новый state
    rerenderEntireTree(state);
}

// При нажатии на кнопку, мы добавляем новый объект в массив
export let addPost = () => {
    let newPost = {
        id: 5,
        // Мы получаем данные из поля ввода
        message: state.profilePage.newPostText,
        likes: 0,
        avatarUrl: "#",
    };

    // Добавляем в объект данные из поля ввода
    state.profilePage.posts.push(newPost);
    // Затираем данные в поле ввода
    state.profilePage.newPostText = "";
    // Рендерим страницу
    rerenderEntireTree(state);
}

// Функция для обновления state, полученный newText мы записываем в state, и рендерим страницу
export let updateNewPostText = (newText) => {
    // Каждый символ, каждое значение мы помещаем в state
    state.profilePage.newPostText = newText;
    // Рендерим с новым значением state
    rerenderEntireTree(state);
}


// Эта функция будет переопределять функцию rerenderEntireTree на функцию коллбек из subscribe
export const subscribe = (observer) => {
    // Коллбеком передаем функцию по рендеру приложения
    rerenderEntireTree = observer;
}

export default state;