import { useState } from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { Eye, EyeSlash, IconProps, User, Lock } from 'phosphor-react-native';
import { styles } from './styles';
import { colors } from '../../styles';

type IconName = 'user' | 'lock';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  iconName?: IconName; // substitui leftIcon
} & TextInputProps;

export function Input({
  placeholder = '',
  value,
  onChangeText,
  secureTextEntry = false,
  iconName,
  ...rest
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const renderLeftIcon = () => {
    const iconProps: IconProps = {
      size: 20,
      color: colors.gray[800],
    };

    if (iconName === 'user') return <User {...iconProps} />;
    if (iconName === 'lock') return <Lock {...iconProps} />;
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {iconName && <View>{renderLeftIcon()}</View>}

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
