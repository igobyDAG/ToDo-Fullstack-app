import React, { useState } from 'react';
import { useContext } from 'react';
import { IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

import { Edit } from './Edit';
import { ToDoItemsContext } from '../../ToDoItemsContextProvider';

import { ToDoTaskDataType } from '../../types/ToDoTypes';
import './ToDoItem.css';

interface ToDoItemProps extends ToDoTaskDataType {
    isEditing?: boolean;
}


export const ToDoItem = ({ taskId, taskTitle, description, isComplete, createdAt }: ToDoItemProps) => {
    const { handleDeleteToDo, handleToggleCompleted } = useContext(ToDoItemsContext);

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const DeleteButton = () => {
        return (
            <IconButton onClick={() => handleDeleteToDo(taskId)}>
                <DeleteIcon color='primary' />
            </IconButton>
        );
    };

    const CheckButton = () => {
        return <Checkbox checked={isComplete} onClick={() => handleToggleCompleted(taskId)} />;
    };

    const EditButton = () => {
        return (
            <IconButton onClick={() => setIsEditing(true)}>
                <EditIcon />
            </IconButton>
        );
    };

    const handleDate = () => {
        return createdAt instanceof Date ? createdAt.getDate() : createdAt;
    };

    const taskTitleClassName = `task-title-${isComplete ? 'completed' : 'pending'}`;

    return (
        <div className='todo-item-wrapper'>
            <div className='buttons'>
                <DeleteButton />
                <EditButton />
                <CheckButton />
            </div>
            {isEditing ? (
                <Edit
                    taskId={taskId}
                    taskTitle={taskTitle}
                    description={description}
                    setIsEditing={setIsEditing}
                />
            ) : (
                <div className='task-content'>
                    <h2 className={taskTitleClassName}>{taskTitle}</h2>
                    {!isComplete && <p>{description}</p>}
                    <span>{`task created ${handleDate()}`}</span>
                </div>
            )}
        </div>
    );
};
