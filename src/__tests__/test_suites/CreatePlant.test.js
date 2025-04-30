import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('Create Plant', () => {
  test('adds a new plant when the form is submitted', () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    const plantNameInput = getByPlaceholderText('Plant name');
    const imageUrlInput = getByPlaceholderText('Image URL');
    const priceInput = getByPlaceholderText('Price');
    const addButton = getByText('Add Plant');

    fireEvent.change(plantNameInput, { target: { value: 'Cactus' } });
    fireEvent.change(imageUrlInput, { target: { value: './images/cactus.jpg' } });
    fireEvent.change(priceInput, { target: { value: 8.99 } });

    fireEvent.click(addButton);

    // Check if the new plant is added to the list
    const plantItems = document.querySelectorAll('[data-testid="plant-item"]');
    expect(plantItems).toHaveLength(8); // Ensure the plant count is updated
    expect(plantItems[7].textContent).toContain('Cactus'); // Check if new plant is rendered
  });
});
