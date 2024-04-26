import axiosInstance from './axiosInstance';
import { AxiosResponse } from 'axios';
import { ToDoTaskDataType, NewToDoTaskDataType } from '../types/ToDoTypes';

const TODO = '/toDo';
const taskUrls = {
    getAll: `${TODO}/all`,
    newTask: `${TODO}/task`,
    getTask: (id: number): string => `${TODO}/task/${id}`,
};

export const getAllToDos = async (): Promise<AxiosResponse<ToDoTaskDataType[]>> => {
    return await axiosInstance.get(taskUrls.getAll);
};

export const postNewToDo = async ({
    taskTitle,
    description,
}: NewToDoTaskDataType): Promise<AxiosResponse<ToDoTaskDataType>> => {
    return await axiosInstance.post(taskUrls.newTask, { taskTitle, description });
};

export const deleteToDo = async (id: number): Promise<AxiosResponse<void>> => {
    return await axiosInstance.delete(taskUrls.getTask(id));
};
