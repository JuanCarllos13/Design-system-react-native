import React from 'react';
import { View } from 'react-native';
import { Input } from '@juancarllos-ui/react-native';
import { fn } from '@storybook/test';

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

// 🔹 Story básica com ícone à esquerda
export const Default = {
  args: {
    placeholder: 'Enter your username',
    iconName: 'user', // alterado de leftIconName
  },
};

// 🔹 Campo de senha com botão de mostrar/ocultar
export const WithPasswordToggle = {
  args: {
    placeholder: 'Enter your password',
    secureTextEntry: true,
    iconName: 'lock', // alterado de leftIconName
  },
};

// 🔹 Sem ícones
export const NoIcons = {
  args: {
    placeholder: 'Just text',
  },
};
