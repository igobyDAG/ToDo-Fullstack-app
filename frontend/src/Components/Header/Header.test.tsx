import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Header } from './Header';
import { getHeaderText } from './helpers';

import currentState from '../../state/currentState';

describe('renders Header component', async () => {
    it('renders header with passed name', async () => {
        const testName = 'John Smith';
        const headerText = getHeaderText(testName);

        render(<Header userName={testName} />);
        const headerElement = screen.getByTestId('todo-app-header');
        expect(headerElement.innerHTML).toBe(headerText);
    });

    it('renders header with name from state', () => {
        const userNameFromState = currentState.userName;
        const headerText = getHeaderText(userNameFromState);

        render(<Header userName={userNameFromState} />);

        const headerElement = screen.getByTestId('todo-app-header');
        expect(headerElement.innerHTML).toBe(headerText);
    });
});
