import React from 'react';

import { ToDoList } from './Components/ToDoList/ToDoList';
import { Header } from './Components/Header/Header';
import { AddToDoItem } from './Components/AddToDoItem/AddToDoItem';
import { ToDoItemsProvider } from './ToDoItemsContextProvider';

import { useToDoRequests } from './hooks/useToDoRequests';
import currentState from './state/currentState';

import './App.css';

function App() {
    // requests are handled here
    const { handleDeleteToDo, handleEditToDo, handleNewToDo, handleToggleCompleted, isLoading, toDolist } =
        useToDoRequests();

    return (
        <>
            <Header userName={currentState.userName} />
            <ToDoItemsProvider
                value={{
                    handleDeleteToDo,
                    handleEditToDo,
                    handleToggleCompleted,
                    isLoading,
                }}
            >
                <div className='ToDo-provider-wrapper'>
                    <AddToDoItem handleSubmit={handleNewToDo} />
                    <ToDoList toDoListItems={toDolist} />
                </div>
            </ToDoItemsProvider>
        </>
    );
}

export default App;
