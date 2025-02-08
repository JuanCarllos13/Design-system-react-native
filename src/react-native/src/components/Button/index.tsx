import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
import { IconProps as TablerIconProps } from 'phosphor-react-native';
import { colors } from '../../../../styles/colors';

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
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

function Title({ children }: TextProps) {
  return <Text style={styles.title}>{children}</Text>;
}

type IconProps = TablerIconProps & {
  icon: React.ComponentType<TablerIconProps>;
};

function Icon({ icon: Icon }: IconProps) {
  return <Icon testID="icon" size={24} color={colors.gray[100]} />;
}

Button.Title = Title;
Button.Icon = Icon;

Button.displayName = 'Button';
export { Button };
