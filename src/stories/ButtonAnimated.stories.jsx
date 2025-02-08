import { fn } from '@storybook/test';
import { View } from 'react-native';
import { AnimatedButton } from '../components/ButtonAnimated';

const meta = {
  title: 'Example/AnimatedButton',
  component: AnimatedButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Story />
      </View>
    ),
  ],
  args: { onPress: fn() },
};

export default meta;

export const Default = {
  args: {
    title: 'Enviar',
  },
};
