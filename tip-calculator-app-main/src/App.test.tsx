import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
    it('renders initial state correctly', () => {
        render(<App />);

        expect(screen.getByAltText('Logo icon')).toBeInTheDocument();

        expect(screen.getByLabelText(/bill/i)).toBeInTheDocument();
        expect(screen.getByText(/select tip %/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/number of people/i)).toBeInTheDocument();

        expect(screen.getByText(/tip amount/i)).toBeInTheDocument();
        expect(screen.getByText(/total/i)).toBeInTheDocument();

        const resetButton = screen.getByText(/reset/i);
        expect(resetButton).toBeInTheDocument();
        expect(resetButton).toBeDisabled();
    });

    it('handles input correctly', async () => {
        render(<App />);
        const billInput = screen.getByLabelText(/bill/i);
        const peopleInput = screen.getByLabelText(/number of people/i);
        const customInput = screen.getByPlaceholderText(/custom/i);
        const resetButton = screen.getByText(/reset/i);

        await userEvent.type(billInput, '100');
        await userEvent.type(peopleInput, '2');
        await userEvent.type(customInput, '20');

        expect(billInput).toHaveValue(100);
        expect(peopleInput).toHaveValue(2);
        expect(customInput).toHaveValue(20);
        expect(resetButton).toBeEnabled();
    });

    it('handles tip percentage selection', async () => {
        render(<App />);

        const tipButton15 = screen.getByLabelText('15%');
        const tipButton25 = screen.getByLabelText('25%');
        const tipButtonCustom = screen.getByPlaceholderText(/custom/i);

        await userEvent.click(tipButton15);

        expect(tipButton15).toBeChecked();
        expect(tipButton25).not.toBeChecked();
        expect(tipButtonCustom).toHaveValue(null);
    });

    it('shows error when people input is zero', async () => {
        render(<App />);

        const peopleInput = screen.getByLabelText(/number of people/i);
        const resetButton = screen.getByText(/reset/i);

        await userEvent.type(peopleInput, '0');

        expect(screen.getByText(/can't be zero/i)).toBeInTheDocument();
        expect(resetButton).toBeDisabled();
    });

    it('calculates tip amount and total correctly', async () => {
        render(<App />);

        const billInput = screen.getByLabelText(/bill/i);
        const tipButton = screen.getByLabelText('10%');
        const peopleInput = screen.getByLabelText(/number of people/i);

        await userEvent.type(billInput, '100');
        await userEvent.click(tipButton);
        await userEvent.type(peopleInput, '2');

        expect(screen.getByText('$5.00')).toBeInTheDocument();
        expect(screen.getByText('$55.00')).toBeInTheDocument();
    });

    it('enables reset button when form is filled', async () => {
        render(<App />);

        const resetButton = screen.getByText(/reset/i);

        await userEvent.type(screen.getByLabelText(/bill/i), '50');
        await userEvent.click(screen.getByLabelText('15%'));
        await userEvent.type(screen.getByLabelText(/number of people/i), '2');

        expect(resetButton).not.toBeDisabled();
    });

    it('resets form when reset button is clicked', async () => {
        render(<App />);

        const bill = screen.getByLabelText(/bill/i);
        const tipButton = screen.getByLabelText('15%');
        const customTipInput = screen.getByPlaceholderText(/custom/i);
        const people = screen.getByLabelText(/number of people/i);
        const resetButton = screen.getByText(/reset/i);

        await userEvent.type(bill, '50');
        await userEvent.click(tipButton);
        await userEvent.type(people, '2');
        await userEvent.click(resetButton);

        expect(bill).toHaveValue(null);
        expect(tipButton).not.toBeChecked();
        expect(customTipInput).toHaveValue(null);
        expect(people).toHaveValue(null);
        expect(screen.getAllByText('$0.00')).toHaveLength(2);
    });
});
