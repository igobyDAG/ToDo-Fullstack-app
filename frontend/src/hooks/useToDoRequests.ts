import React from 'react';
import { useState, useEffect } from 'react';

import { getAllToDos, postNewToDo, deleteToDo } from '../api/toDoAPI';

import { ToDoTaskDataType, NewToDoTaskDataType } from '../types/ToDoTypes';

export const useToDoRequests = () => {
    const [toDolist, setToDoList] = useState<ToDoTaskDataType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleGetToDos = async () => {
        setIsLoading(true);
        try {
            const { data } = await getAllToDos();
            console.log(data);
            setToDoList(data);
        } catch {
            console.log('Could not fetch todo list');
            setToDoList([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNewToDo = async ({ taskTitle, description }: NewToDoTaskDataType): Promise<ToDoTaskDataType> => {
        try {
            const { data } = await postNewToDo({ taskTitle, description });
            console.log(data);
            setToDoList((todoList) => {
                return [data, ...todoList];
            });
            return data;
        } catch {
            new Error('Error posting new ToDo');
            const defaultToDo = {
                taskId: 0,
                taskTitle: '',
                description: '',
                createdAt: new Date(),
                isComplete: false,
            };
            return defaultToDo;
        }
    };

    const handleDeleteToDo = async (taskId: number): Promise<void> => {
        try {
            await deleteToDo(taskId);
            setToDoList((tasks) => {
                const newTasks = tasks.filter((task) => taskId !== task.taskId);
                return [...newTasks];
            });
        } catch {
            new Error('Error deleting ToDo');
        }
    };

    const handleToggleCompleted = async (taskId: number): Promise<void> => {
        try {
            setToDoList((tasks) => {
                const newList = tasks.map((task) => {
                    return task.taskId === taskId ? { ...task, isComplete: !task.isComplete } : task;
                });

                return newList;
            });
        } catch {
            new Error('couldnt update task');
        }
    };

    const handleEditToDo = async (taskId: number, newTaskTitleText: string, newDescriptionText: string) => {
        try {
            //todo: link with backend
            setToDoList((taskList) => {
                const newList = taskList.map((task) => {
                    if (task.taskId === taskId) {
                        return { ...task, taskTitle: newTaskTitleText, description: newDescriptionText };
                    } else {
                        return { ...task };
                    }
                });
                return [...newList];
            });
        } catch {
            new Error('edit error');
        }
    };

    useEffect(() => {
        handleGetToDos();
    }, []);

    return {
        toDolist,
        isLoading,
        handleNewToDo,
        handleDeleteToDo,
        handleToggleCompleted,
        handleEditToDo,
    };
};
