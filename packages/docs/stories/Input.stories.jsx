import React from 'react';
import { View } from 'react-native';
import { Input } from '@juancarllos-ui/react-native';
import { fn } from '@storybook/test';
import Octicons from '@expo/vector-icons/Octicons';

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
  args: {
    onChangeText: fn(),
  },
};

export default meta;

// 🔹 Story básica com placeholder e ícone à esquerda
export const Default = {
  args: {
    placeholder: 'Enter your username',
    leftIcon: <Octicons name="person" size={20} color="#757474" />,
  },
};

// 🔹 Com secureTextEntry (mostrar/ocultar senha) e ícone de cadeado à esquerda
export const WithPasswordToggle = {
  args: {
    placeholder: 'Enter your password',
    secureTextEntry: true,
    leftIcon: <Octicons name="lock" size={20} color="#757474" />,
  },
};

// 🔹 Sem ícone à esquerda, apenas texto comum
export const NoIcons = {
  args: {
    placeholder: 'Just text',
  },
};
