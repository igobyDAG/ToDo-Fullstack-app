import React from 'react';

import { ToDoItem } from '../ToDoItem/ToDoItem';
import { Loader } from '../Loader/Loader';

import { ToDoTaskDataType } from '../../types/ToDoTypes';
import './ToDoList.css';

interface ToDoListProps {
    toDoListItems: ToDoTaskDataType[];
    isLoading?: boolean;
}

export const ToDoList = ({ toDoListItems }: ToDoListProps) => {
    // This component should handle only the display of all ToDo tasks

    const NO_ITEMS_TEXT = 'No pending tasks, start by adding one!';

    const List = () => {
        return toDoListItems.length === 0 ? (
            <h3>{NO_ITEMS_TEXT}</h3>
        ) : (
            toDoListItems.map((todo) => (
                <ToDoItem
                    taskId={todo.taskId}
                    taskTitle={todo.taskTitle}
                    description={todo.description}
                    isComplete={todo.isComplete}
                    createdAt={todo.createdAt}
                    key={todo.taskId}
                />
            ))
        );
    };

    return (
        <div className='todo-list'>
            <Loader>
                <List />
            </Loader>
        </div>
    );
};
