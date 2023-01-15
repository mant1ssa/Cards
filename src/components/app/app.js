import React, {useState} from 'react'
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import Test from "../test";

import {projects} from "../../helpers/projectsList";

import './app.css'
const App = () => {

    const [todos, setTodos] = useState([
        {id: 1, text: "First"},
        {id: 2, text: "Second"},
        {id: 3, text: "Third"},
        {id: 4, text: "Fourth"}
    ]);

    const [todoText, setTodoText] = useState('')

    const addTodo = (event) => {
        if(event.key === 'Enter'){
            setTodos([
                ...todos,
                {
                    id: Date.now,
                    text: todoText
                }
            ])
            setTodoText('')
        }
    }

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList list={todos}/>
            {/*<PostAddForm/>*/}
            <input type="text"
                   value={todoText}
                   placeholder="Say smth"
                   className="form-control new-post-label"
                   onChange={event => setTodoText(event.target.value)}
                   onKeyPress={addTodo}
            />

        </div>
    )
}

export default App;