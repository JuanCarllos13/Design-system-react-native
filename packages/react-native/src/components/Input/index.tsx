import Octicons from '@expo/vector-icons/Octicons';
import React, { useState } from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
} & TextInputProps;

export function Input({
  placeholder = '',
  value,
  onChangeText,
  secureTextEntry = false,
  leftIcon,
  ...rest
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {leftIcon && <View>{leftIcon}</View>}

        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.gray[800]}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          {...rest}
        />
      </View>
      {secureTextEntry && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Octicons
            name={isPasswordVisible ? 'eye-closed' : 'eye'}
            size={24}
            color={colors.gray[800]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
