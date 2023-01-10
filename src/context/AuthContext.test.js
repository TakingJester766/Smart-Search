import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AuthContextProvider } from './AuthContext';

describe('AuthContextProvider', () => {
    const TestComponent = () => {
        const { createUser, signIn, logout, user } = useContext(AuthContext);
        return (
            <div>
                <button onClick={() => createUser('test@example.com', 'password')}>Create user</button>
                <button onClick={() => signIn('test@example.com', 'password')}>Sign in</button>
                <button onClick={logout}>Sign out</button>
                <div data-testid="user">{JSON.stringify(user)}</div>
            </div>
        );
    };

    it('should provide context value', () => {
        const { getByText, getByTestId } = render(
            <AuthContextProvider>
                <TestComponent />
            </AuthContextProvider>
        );
        fireEvent.click(getByText('Create user'));
        fireEvent.click(getByText('Sign in'));
        expect(getByTestId('user').textContent).toBe(JSON.stringify({ email: 'test@example.com' }));
    });

    it('should update context value on sign out', () => {
        const { getByText, getByTestId } = render(
            <AuthContextProvider>
                <TestComponent />
            </AuthContextProvider>
        );
        fireEvent.click(getByText('Sign out'));
        expect(getByTestId('user').textContent).toBe(JSON.stringify({}));
    });
});
