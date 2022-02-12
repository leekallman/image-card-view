import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import CardWrapper from '../components/CardWrapper'

afterEach(() => {
    cleanup();
})
//not sure how to write these tests, but left some test scenario suggestions

//I'm guessing it fails due to import of the CardWrapper component not being able to reach the fetch?
test('toggle between list and grid view', () => {
    render(<CardWrapper />);
    const toggleBtn = screen.getByTestId('toggle-btn')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('card-wrapper')).toHaveClass("grid");
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('card-wrapper')).toHaveClass("list");
});

test('sorting function alternates between asc and desc', () => {
    render(<CardWrapper />);
    const sortingBtn = screen.getByTestId('sorting-btn')
    fireEvent.click(sortingBtn)

    fireEvent.click(sortingBtn)
});

test('search function', () => {
    render(<CardWrapper />);
});

test('lazy load', () => {
    render(<CardWrapper />);
});

