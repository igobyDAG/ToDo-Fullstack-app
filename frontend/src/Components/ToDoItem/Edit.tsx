import React, { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import { ToDoItemsContext } from '../../ToDoItemsContextProvider';

export const Edit = ({
    taskId,
    taskTitle,
    description,
    setIsEditing,
}: // handleEditTodo,
{
    taskId: number;
    taskTitle: string;
    description: string;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    // handleEditTodo: (taskId: number, newTaskTitleText: string, newDescriptionText: string) => Promise<void>;
}) => {
    const { handleEditToDo } = useContext(ToDoItemsContext);
    const [taskTitleText, setTaskTitleText] = useState<string>(taskTitle);
    const [descriptionText, setDescriptionText] = useState<string>(description);

    return (
        <div className='edit-wrapper'>
            <div className='edit-fields'>
                <TextField
                    label='Task Title'
                    type='text'
                    value={taskTitleText}
                    onChange={(e) => setTaskTitleText(e.target.value)}
                    data-testid='task-title-field'
                />
                <TextField
                    label='Description'
                    type='text'
                    multiline
                    rows={2}
                    value={descriptionText}
                    onChange={(e) => setDescriptionText(e.target.value)}
                    data-testid='description-field'
                />
            </div>
            <div className='edit-buttons'>
                <IconButton>
                    <CheckIcon
                        color='primary'
                        onClick={() => {
                            handleEditToDo(taskId, taskTitleText, descriptionText);
                            setIsEditing(false);
                        }}
                    />
                </IconButton>
                <IconButton onClick={() => setIsEditing(false)}>
                    <CloseIcon color='secondary' />
                </IconButton>
            </div>
        </div>
    );
};
