import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { TASK_HEADER_PLACEHOLDER, DESCRIPTION_PLACEHOLDER } from './constants';

import { NewToDoTaskDataType, ToDoTaskDataType } from '../../types/ToDoTypes';

import './AddToDoItem.css';

interface AddToDoItemProps {
    handleSubmit: ({ taskTitle, description }: NewToDoTaskDataType) => Promise<ToDoTaskDataType>;
}

export const AddToDoItem = ({ handleSubmit }: AddToDoItemProps) => {
    const [taskTitle, setTaskTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // todo: clear fields
        setTaskTitle('');
        setDescription('');
        handleSubmit({ taskTitle, description });
    };

    const isDisabled = taskTitle.length === 0 || description.length === 0;

    return (
        <div className='add-task-wrapper'>
            <form
                className='add-task-form'
                onSubmit={(e) => {
                    handleFormSubmit(e);
                }}
            >
                <div className='text-fields'>
                    <TextField
                        data-testid='task-header-field'
                        type='text'
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        placeholder={TASK_HEADER_PLACEHOLDER}
                        variant='filled'
                    />
                    <TextField
                        data-testid='description-field'
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder={DESCRIPTION_PLACEHOLDER}
                        variant='filled'
                    />
                </div>

                <IconButton type='submit' disabled={isDisabled} data-testid='submit-button'>
                    <AddCircleOutlineIcon color='primary' fontSize='large' />
                </IconButton>
            </form>
        </div>
    );
};
