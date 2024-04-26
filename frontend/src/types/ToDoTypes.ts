export interface NewToDoTaskDataType {
    taskTitle: string;
    description: string;
}

export interface ToDoTaskDataType extends NewToDoTaskDataType {
    taskId: number;
    isComplete: boolean;
    createdAt: Date;
}
