import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FuncSearch from './components/search/functionSearch';
import Login from './components/login/login';
import { Provider } from 'react-redux';
import store from './store/store';

const ReduxProvider = ({ store, children }) => {
  return <Provider store={store}>{children}</Provider>;
};


test('renders all component login', () => {
  render(
    <ReduxProvider store={store}>
      <Login />
    </ReduxProvider>
  );
  const Title = screen.getByText(/Bebaskan Dirimu Dengan Musik/i);
  const Content = screen.getByText(/Nikmati musik bebas iklan, playback offline, dan banyak lagi. Batalkan kapan saja./i);
  const Button = screen.getByText(/Login/i);
  expect(Title).toBeInTheDocument();
  expect(Content).toBeInTheDocument();
  expect(Button).toBeInTheDocument();
});


test('test search component', () => {
    render(<FuncSearch />);
    const inputTitle = screen.getByRole('textbox');
    const btnSearch = screen.getByText('Search');
    userEvent.type(inputTitle, 'test');
    userEvent.click(btnSearch);
    expect(inputTitle).toHaveValue('test');
});

//mocking test search track from simple data like spotify
test('test search track', async () => {
    const mockResponse = {
        tracks: {
            items: [
                {
                    id: '1',
                    name: 'test',
                    artists: [
                        {
                            name: 'test'
                        }
                    ]
                }
            ]
        }
    };
    const mockFetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockResponse)
        })
    );
    global.fetch = mockFetch;
    render(<FuncSearch />);
    const inputTitle = screen.getByRole('textbox');
    const btnSearch = screen.getByText('Search');
    userEvent.type(inputTitle, 'test');
    userEvent.click(btnSearch);
    expect(inputTitle).toHaveValue('test');
});


