import { describe, expect, test, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe("Button rendered with the default theme (i.e., no theme property set)", () => {

    const mockFunction = vi.fn(() => true);

    beforeEach(() => {
        render(<Button onClick={mockFunction}><h3>Click on Me!</h3></Button>)
    })

    test("Button contains children, even if children are wrapped in HTML/Components", () => {
        const button = screen.getByText(/Click/i).closest('button');
        expect(button.innerHTML).toContain('h3');
    })

    test("Button contains the class of Button", () => {
        const button = screen.getByText(/Click/i).closest('button');
        expect(button.classList.contains('Button')).toBeTruthy();
    })

    test("If no theme property passed in, default should be dark", () => {
        const button = screen.getByText(/Click/i).closest('button');
        expect(button.classList.contains('dark')).toBeTruthy();
    })

    test("Clicking the button 1 time should result in the onClick function firing 1 time", () => {
        const button = screen.getByText(/Click/i).closest('button');
        fireEvent.click(button);
        expect(mockFunction).toHaveBeenCalledTimes(1);

    })
    
})


describe("Specific tests for the light theme", () => {

    const mockFunction = vi.fn(() => 0);

    beforeEach(() => {
        render(<Button onClick={mockFunction} theme={'light'}><h3>Click me!</h3></Button>)
    })

    test("If theme property 'light' passed in, button should have class light", () => {
        const button = screen.getByText(/Click/i).closest('button');
        expect(button.classList.contains('light')).toBeTruthy();
    })

    test("If theme property 'light' passed in, button should NOT have class dark", () => {
        const button = screen.getByText(/Click/i).closest('button');
        expect(button.classList.contains('dark')).toBeFalsy();
    })

});


describe("Test disabled property set to true on a button", () => {

    const mockFunction = vi.fn(() => 0);

    beforeEach(() => {
        render(<Button onClick={mockFunction} disabled={true}><h3>Click me!</h3></Button>)
    })

    test("If you click on a disabled button, the onClick handler should not be called", () => {
            const button = screen.getByText(/Click/i).closest('button');
            fireEvent.click(button);
            expect(mockFunction).toHaveBeenCalledTimes(0);
    })



})
