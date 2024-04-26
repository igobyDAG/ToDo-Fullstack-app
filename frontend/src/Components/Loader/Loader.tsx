import React from 'react';
import { useContext } from 'react';
import { CircularProgress } from '@mui/material';

import { ToDoItemsContext } from '../../ToDoItemsContextProvider';

// Uses the ToDoItemsContext but can recieve another context for the meantime for testing purposes.
export const Loader = ({
    children,
    context,
}: {
    isLoading?: boolean;
    context?: React.Context<any>;
    children: JSX.Element;
}): JSX.Element => {
    const { isLoading } = useContext(context ?? ToDoItemsContext);
    if (isLoading) {
        return <CircularProgress />;
    }

    return children;
};
