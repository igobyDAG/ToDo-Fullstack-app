import { createContext } from 'react';

interface ToDoItemsContextProps {
    handleDeleteToDo: (taskId: number) => Promise<void>;
    handleEditToDo: (taskId: number, newTaskTitleText: string, newDescriptionText: string) => Promise<void>;
    handleToggleCompleted: (taskId: number) => Promise<void>;
    isLoading: boolean;
}

export const ToDoItemsContext = createContext<ToDoItemsContextProps>({} as ToDoItemsContextProps);

export const ToDoItemsProvider = ({
    value,
    children,
}: {
    value: ToDoItemsContextProps;
    children: JSX.Element;
}): JSX.Element => {
    return <ToDoItemsContext.Provider value={value}>{children}</ToDoItemsContext.Provider>;
};
