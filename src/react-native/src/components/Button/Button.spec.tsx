import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './';
import { ArrowRight } from 'phosphor-react-native';

describe('Button Component', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <Button>
        <Button.Title>Click Me</Button.Title>
      </Button>
    );
    const buttonText = getByText('Click Me');
    expect(buttonText).toBeTruthy();
  });

  it('should show loading indicator when isLoading is true', () => {
    const { getByTestId } = render(
      <Button isLoading={true}>
        <Button.Title>Click Me</Button.Title>
      </Button>
    );
    const activityIndicator = getByTestId('loading-indicator');
    expect(activityIndicator).toBeTruthy();
  });

  it('should disable button when isLoading is true', () => {
    const { getByTestId } = render(
      <Button isLoading>
        <Button.Title>Click Me</Button.Title>
      </Button>
    );

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('should handle button press correctly', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button onPress={mockOnPress}>
        <Button.Title>Click Me</Button.Title>
      </Button>
    );
    const button = getByText('Click Me');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should render icon correctly', () => {
    const { getByTestId } = render(
      <Button>
        <Button.Icon icon={ArrowRight} />
      </Button>
    );
    const icon = getByTestId('icon');
    expect(icon).toBeTruthy();
  });

  it("should disable button when it's loading", () => {
    const { getByTestId, debug } = render(
      <Button isLoading>
        <Button.Title>Click Me</Button.Title>
      </Button>
    );
    const button = getByTestId('button');

    expect(button).toBeDisabled();
  });
});
