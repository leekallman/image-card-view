import { render, screen, cleanup } from '@testing-library/react';
import Card from '../components/Card'

afterEach(() => {
    cleanup();
})

test('render first card object', () => {
    const user =
    {
        name: {
            first: 'John',
            last: 'Doe',
        },
        picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/69.jpg'
        },
        location: {
            city: 'Stockholm'
        },
        id: {
            value: '15141581'
        }
    }
    render(<Card user={user} />);
    const cardElement = screen.getByTestId('card-15141581');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent("John Doe");
});
