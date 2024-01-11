import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import { ISearchResponse } from '../types';
import { act } from 'react-dom/test-utils';

const dataArray = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  full_name: 'Harish Sharma',
  description: 'A worker process has failed to exit gracefully and has been force exited.',
  owner: {
    id: index + 1,
    avatar_url: 'https://www.fakeurl.com/assets/images/harish.jpeg',
  }
}));

const mockResponse = {
  incomplete_results: false,
  items: dataArray,
  total_count: dataArray.length
} as ISearchResponse;



describe('Flexera Pagination Github Repo Search', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;

    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    })
  })

  afterEach(() => {
    jest.restoreAllMocks();
  })
  it('renders correctly', () => {
    render(<App />);
    expect(screen.getByText('Pagination App'))
  });

  it('loading message when fetching', async () => {
    render(<App />);
    expect(screen.getByText('Loading... Please Wait'))
  })

  it('fetch the result and display on UI', async () => {
    let container: HTMLElement | undefined;
    await act(async () => {
      const renderResult = render(<App />);
      container = renderResult.container;
    })
    await waitFor(() => {
      expect(container).toHaveTextContent('Page 1 | Total Results: 12')
    })
  })

  it('Prev button should be disabled as we have 12 records', async () => {
    await act(async () => {
       render(<App />);
    })
    await waitFor(() => {
      expect(screen.getByRole('prev')).toBeInTheDocument()
      expect(screen.getByRole('next')).toBeInTheDocument()
      expect(screen.getByRole('prev')).toHaveClass('disabled')
    })
  })

  it('Simulate click event on next button', async () => {
    await act(async () => {
      render(<App />);
    })
    await waitFor(async () => {
      const nextButton = screen.getByRole('next')
      fireEvent.click(nextButton)
      expect(screen.getByText('Loading... Please Wait'))
      await waitFor(() => {
        expect(screen.getByText('Page 2 | Total Results: 12'))
        expect(screen.getByRole('prev')).toBeInTheDocument()
        expect(screen.getByRole('next')).toBeInTheDocument()
        expect(screen.getByRole('next')).toHaveClass('disabled')
      })
    })
  })

})


