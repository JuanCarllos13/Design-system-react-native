import { fn } from '@storybook/test';
import { View } from 'react-native';
import { Button } from '../components/Button/Button';
import { ArrowRight, ArrowLeft } from 'phosphor-react-native';

const meta = {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => (
      <View>
        <Story />
      </View>
    ),
  ],
  args: { onPress: fn() },
};

export default meta;

export const Primary = {
  args: {
    label: 'Primary Button',
    children: (
      <Button>
        <Button.Title>Entrar</Button.Title>
      </Button>
    ),
  },
};

export const Loading = {
  args: {
    isLoading: true,
    label: 'Loading...',
  },
  children: (
    <Button isLoading>
      <Button.Title>Entrar</Button.Title>
    </Button>
  ),
};

export const IconButtonLeft = {
  args: {
    label: 'Button with Icon on the left',
    children: (
      <Button>
        <Button.Icon icon={ArrowLeft} />
        <Button.Title>Entrar</Button.Title>
      </Button>
    ),
  },
};

export const IconButtonRight = {
  args: {
    label: 'Button with Icon on the right',
    children: (
      <Button>
        <Button.Title>Entrar</Button.Title>
        <Button.Icon icon={ArrowRight} />
      </Button>
    ),
  },
};
