import { createContext, useContext } from 'react';
import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Loader } from './Loader';

interface TestingContextInterface {
    isLoading: boolean;
}
const testingContext = createContext<TestingContextInterface>({} as TestingContextInterface);
const TestProvider = ({ values, children }: { values: TestingContextInterface; children: JSX.Element }) => {
    return <testingContext.Provider value={values}>{children}</testingContext.Provider>;
};

describe('Testing loader wrapper', async () => {
    it('displays loader', async () => {
        const isLoading = true;
        const LoaderWithContext = () => {
            return (
                <TestProvider values={{ isLoading }}>
                    <Loader context={testingContext}>
                        <p>Testing Loader</p>
                    </Loader>
                </TestProvider>
            );
        };
        render(<LoaderWithContext />);

        const circularProgress = screen.getByRole('progressbar');
        expect(circularProgress).toBeTruthy();
    });
});
