import { fn } from '@storybook/test';
import { View } from 'react-native';
import { Input } from '../components/Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
  args: { onChangeText: fn() },
};

export default meta;

export const Default = {
  args: {
    title: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithSecureText = {
  args: {
    title: 'Password',
    placeholder: 'Enter your password',
    secure: true,
  },
};

export const SmallWidth = {
  args: {
    title: 'Code',
    placeholder: 'Enter code',
    width: 'SM',
  },
};

export const LargeHeight = {
  args: {
    title: 'Bio',
    placeholder: 'Enter your bio',
    height: 'LG',
  },
};
