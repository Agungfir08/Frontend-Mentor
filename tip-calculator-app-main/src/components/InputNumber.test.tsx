import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import InputNumber from './InputNumber';

describe('InputNumber', () => {
    it('renders correctly', () => {
        render(
            <InputNumber
                label="Test"
                id="test-input"
                value=""
                name="test"
                icon=""
                placeholder="0"
                onChange={() => {}}
            />
        );
        const input = screen.getByLabelText('Test');
        expect(input).toBeInTheDocument();
        expect(input).toHaveClass('text-right');
        expect(input).toHaveAttribute('type', 'number');
        expect(input).toHaveAttribute('min', '0');
    });

    it('calls onChange handler', () => {
        const handleChange = vi.fn();
        render(
            <InputNumber
                label="Test"
                id="test-input"
                value=""
                name="test"
                placeholder="0"
                onChange={handleChange}
            />
        );

        const input = screen.getByLabelText('Test');
        fireEvent.change(input, { target: { value: '100' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('applies center text position', () => {
        render(
            <InputNumber
                label="Test"
                id="test-input"
                value=""
                name="test"
                placeholder="Custom"
                onChange={() => {}}
                position="center"
            />
        );

        const input = screen.getByLabelText('Test');
        expect(input).toHaveClass('text-center');
        expect(input).not.toHaveClass('text-right');
    });

    it('renders without label', () => {
        render(
            <InputNumber
                id="Test-tip"
                value=""
                name="test"
                placeholder="Test"
                onChange={() => {}}
            />
        );

        const input = screen.getByPlaceholderText('Test');
        expect(input).toBeInTheDocument();
        expect(screen.queryByText(/label/i)).not.toBeInTheDocument();
    });
});
