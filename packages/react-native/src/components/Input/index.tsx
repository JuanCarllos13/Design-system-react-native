import { useState } from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Eye,
  EyeSlash,
  IconProps as TablerIconProps,
} from 'phosphor-react-native';
import { styles } from './styles';
import { colors } from '../../styles';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  icon?: React.ComponentType<TablerIconProps>; // ícone opcional
} & TextInputProps;

export function Input({
  placeholder = '',
  value,
  onChangeText,
  secureTextEntry = false,
  icon: Icon,
  ...rest
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {Icon && <Icon size={24} color={colors.gray[100]} testID="icon" />}

        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.gray[800]}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          style={styles.input} // se tiver um estilo
          {...rest}
        />
      </View>

      {secureTextEntry && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          {isPasswordVisible ? (
            <EyeSlash size={24} color={colors.gray[800]} />
          ) : (
            <Eye size={24} color={colors.gray[800]} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}
