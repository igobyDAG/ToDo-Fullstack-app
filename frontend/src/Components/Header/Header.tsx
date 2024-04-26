import React from 'react';

import { getHeaderText } from './helpers';

export const Header = ({ userName }: { userName: string }) => {
    const headerText = getHeaderText(userName);
    return <h1 data-testid='todo-app-header'>{headerText}</h1>;
};
