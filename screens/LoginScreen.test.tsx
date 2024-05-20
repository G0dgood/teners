import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';

// Mocking expo-haptics to avoid actual haptic feedback during tests
jest.mock('expo-haptics', () => ({
  impactAsync: jest.fn(),
}));

// Mocking @react-navigation/native to control navigation during tests
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      replace: jest.fn(),
    }),
  };
});

describe('LoginScreen', () => {
  test('shows invalid email alert for short email', async () => {
    const { getByTestId, getByText } = render(<LoginScreen />);

    fireEvent.changeText(getByTestId('emailInput'), 'short');
    fireEvent.press(getByTestId('loginButton'));

    await waitFor(() => {
      expect(getByText('Invalid Email')).toBeTruthy();
      expect(getByText('Email must be at least 11 characters long.')).toBeTruthy();
    });
  });

  test('navigates to Password screen for valid email', async () => {
    const navigation = {
      replace: jest.fn(),
    };
    const { getByTestId } = render(<LoginScreen navigation={navigation} />);

    fireEvent.changeText(getByTestId('emailInput'), 'validemail@example.com');
    await act(async () => {
      fireEvent.press(getByTestId('loginButton'));
    });

    await waitFor(() => {
      expect(navigation.replace).toHaveBeenCalledWith('Password');
    });
  });

  test('handles login error and shows alert', async () => {
    const navigation = {
      replace: jest.fn(() => {
        throw new Error('Login error');
      }),
    };
    const { getByTestId, getByText } = render(<LoginScreen navigation={navigation} />);

    fireEvent.changeText(getByTestId('emailInput'), 'validemail@example.com');
    await act(async () => {
      fireEvent.press(getByTestId('loginButton'));
    });

    await waitFor(() => {
      expect(getByText('Login Error')).toBeTruthy();
      expect(getByText('An error occurred during login. Please try again.')).toBeTruthy();
    });
  });
});
