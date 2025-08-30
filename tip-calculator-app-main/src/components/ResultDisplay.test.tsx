import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ResultDisplay from './ResultDisplay';

describe('ResultDisplay', () => {
    it('renders correctly with text and result', () => {
        render(<ResultDisplay text="tip amount" result="42.50" />);

        expect(screen.getByText('tip amount')).toBeInTheDocument();
        expect(screen.getByText('tip amount')).toHaveClass('capitalize');
        expect(screen.getByText('$42.50')).toBeInTheDocument();
        expect(screen.getByText('/ person')).toBeInTheDocument();
    });
});
