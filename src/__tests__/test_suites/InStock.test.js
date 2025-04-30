import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('In Stock', () => {
  test('marks a plant as sold out', async () => {
    global.setFetchResponse(global.basePlants);
    const { queryAllByTestId, getByText } = render(<App />);

    const plantItems = queryAllByTestId('plant-item');
    expect(plantItems).toHaveLength(global.basePlants.length);

    const firstPlantMarkSoldOutButton = plantItems[0].querySelector('button');
    fireEvent.click(firstPlantMarkSoldOutButton);

    // Check that the button text changes to 'Sold Out'
    expect(firstPlantMarkSoldOutButton.textContent).toBe('Sold Out');
  });
});
