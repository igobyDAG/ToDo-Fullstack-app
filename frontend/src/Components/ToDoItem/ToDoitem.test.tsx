import { screen, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useContext, createContext } from 'react';

import { ToDoItem } from './ToDoItem';
import { ToDoItemsContext, ToDoItemsProvider } from '../../ToDoItemsContextProvider';

import mockData from '../../data/ToDoItemTestData.mock.json';

// interface ToDoItemTestingContextinterface {

// }
// const ToDoItemTestingContext = createContext()

const taskData = {
    taskId: 1,
    taskTitle: 'Complete project proposal',
    description: 'Finish writing the project proposal for the upcoming presentation.',
    isComplete: false,
    createdAt: new Date(),
};

// describe('ToDo item component testing', async () => {
//     it('renders list of todo items with content', async () => {
//         const mock = vi.fn();
//         const ToDoItemData = {
//             handleDeleteToDo: async (taskId: number) =>
//                 await new Promise((res) => res(mock)).then((mock) => mock()),
//             handleEditToDo: async () => vi.fn(),
//             handleToggleCompleted: async () => vi.fn(),
//             isEditing: false,
//             isLoading: false,
//             setIsEditing: () => vi.fn(),
//         };

//         render(
//             <ToDoItemsProvider value={{ ...ToDoItemData }}>
//                 <ToDoItem {...taskData} />
//             </ToDoItemsProvider>,
//         );
//     });
// });
