import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { AddToDoItem } from './AddToDoItem';
import { TASK_HEADER_PLACEHOLDER, DESCRIPTION_PLACEHOLDER } from './constants';

import { ToDoTaskDataType } from '../../types/ToDoTypes';

const newTaskMockData: ToDoTaskDataType = {
    taskId: 1,
    taskTitle: '',
    description: '',
    isComplete: false,
    createdAt: new Date(),
};

const handleSubmitMock = vi.fn(async ({ taskTitle, description }) => {
    const returnObject = { ...newTaskMockData, taskTitle, description };
    return returnObject;
});

describe('AddToDoItem component testing', async () => {
    beforeEach(() => {
        render(<AddToDoItem handleSubmit={handleSubmitMock} />);
    });

    it('renders AddToDoItem component', async () => {
        const taskHeaderField = screen.getByTestId('task-header-field').querySelector('input');
        const descriptionField = screen.getByTestId('description-field').querySelector('input');

        expect(taskHeaderField?.placeholder).toBe(TASK_HEADER_PLACEHOLDER);
        expect(descriptionField?.placeholder).toBe(DESCRIPTION_PLACEHOLDER);
    });

    it('Passes data into input boxes and clicks on submit', async () => {
        const event = userEvent.setup();

        const taskHeaderText = 'testing task header';
        const descriptionText = 'testing task description';

        const newTaskReturnedData: ToDoTaskDataType = {
            ...newTaskMockData,
            taskTitle: taskHeaderText,
            description: descriptionText,
        };

        const taskHeaderField = screen.getByTestId('task-header-field').querySelector('input');
        const descriptionField = screen.getByTestId('description-field').querySelector('input');
        const submitButton = screen.getByTestId('submit-button');
        await event.type(taskHeaderField as HTMLInputElement, taskHeaderText);
        await event.type(descriptionField as HTMLInputElement, descriptionText);

        expect(taskHeaderField?.value).toBe(taskHeaderText);
        expect(descriptionField?.value).toBe(descriptionText);

        // When submiting fields should be cleared
        await event.click(submitButton);
        expect(taskHeaderField?.value).toBe('');
        expect(descriptionField?.value).toBe('');
        expect(handleSubmitMock).toHaveReturnedWith(newTaskReturnedData);
    });
});
