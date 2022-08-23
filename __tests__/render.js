import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../client/components/Header';

import { BrowserRouter } from 'react-router-dom';

describe('Testing React components', () => {
  describe('Component', () => {
    let text;

    beforeAll(() => {
      text = render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
    });

    test('Checks if the Header component is rendered', () => {
      expect(text.getByText('MacroTracks')).toBeTruthy();
    });
  });
  describe('Component', () => {
    let text;

    beforeAll(() => {
      text = render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
    });

    test('The header should load with 3 hyperlinks', async () => {
      const buttons = await screen.findAllByRole('link');
      expect(buttons.length).toBe(3);
    });
  });
});
