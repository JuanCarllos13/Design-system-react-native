import React, { ReactNode } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
import { IconProps as TablerIconProps } from 'phosphor-react-native';
import { colors } from '../../styles';

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

type TitleProps = TextProps & {
  children: ReactNode;
};
function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={isLoading}
      testID="button"
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator
          testID="loading-indicator"
          size="small"
          color={colors.gray[100]}
        />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

function Title({ children, ...rest }: TitleProps) {
  return (
    <Text style={styles.title} {...rest}>
      {children}
    </Text>
  );
}

type IconProps = TablerIconProps & {
  icon: React.ComponentType<TablerIconProps>;
};

function Icon({ icon: Icon }: IconProps) {
  return <Icon testID="icon" size={24} color={colors.gray[100]} />;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
