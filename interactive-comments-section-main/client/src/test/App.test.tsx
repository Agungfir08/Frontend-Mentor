import { screen, render } from '@testing-library/react';
import App from '../App';
import { describe, expect, it } from 'vitest';

describe('integration test', () => {
    it('renders the app component correctly', () => {
        render(<App />);
        expect(screen.getByText('Your App Title')).toBeInTheDocument();
    });
});
