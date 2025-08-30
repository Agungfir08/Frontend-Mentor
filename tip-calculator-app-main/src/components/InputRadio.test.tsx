import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import InputRadio from './InputRadio';

describe('InputRadio', () => {
    it('renders correctly with given value', () => {
        render(
            <InputRadio
                id="test-radio"
                name="test"
                value={15}
                onChange={() => {}}
            />
        );
        const radio = screen.getByText('15%');
        expect(radio).toBeInTheDocument();
    });

    it('calls onChange handler when clicked', () => {
        const handleChange = vi.fn();
        render(
            <InputRadio
                id="test-radio"
                name="test"
                value={10}
                onChange={handleChange}
            />
        );

        const radio = screen.getByLabelText('10%');
        fireEvent.click(radio);

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('applies the correct checked state', () => {
        render(
            <>
                <InputRadio
                    id="test-radio"
                    name="test"
                    value={25}
                    checked={true}
                    onChange={() => {}}
                />

                <InputRadio
                    id="test-radio-2"
                    name="test"
                    value={50}
                    checked={false}
                    onChange={() => {}}
                />
            </>
        );

        const radio = screen.getByLabelText('25%');
        const radio2 = screen.getByLabelText('50%');
        expect(radio).toBeChecked();
        expect(radio2).not.toBeChecked();
    });
});
