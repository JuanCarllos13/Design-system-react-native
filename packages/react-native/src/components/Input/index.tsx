import { forwardRef, useState } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Eye, EyeClosed } from 'phosphor-react-native';
import { styles } from './styles';

type InputProps = TextInputProps & {
  title: string;
  titileColor?: string;
  width?: 'LG' | 'SM';
  height?: 'LG' | 'SM';
  secure?: boolean;
  secureColor?: string;
  inputContainerStyle?: ViewStyle;
};

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      title,
      width,
      height,
      secure = false,
      secureColor,
      titileColor,
      inputContainerStyle,
      ...rest
    },
    ref
  ) => {
    const [secureText, setSecureText] = useState(true);

    return (
      <View
        style={[
          styles.container,
          { width: width === 'LG' ? '100%' : '50%' },
          { height: height === 'LG' ? 60 : 40 },
        ]}
      >
        <Text style={[styles.text, { color: titileColor }]}>{title}</Text>
        <View style={[styles.containerInput, inputContainerStyle]}>
          <TextInput
            style={[styles.inputText, { textAlignVertical: 'top' }]}
            secureTextEntry={secure ? secureText : false}
            ref={ref}
            {...rest}
          />
          {secure && (
            <TouchableOpacity
              onPress={() => setSecureText(!secureText)}
              style={styles.eye}
            >
              {secureText ? (
                <EyeClosed color={secureColor} />
              ) : (
                <Eye color={secureColor} />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
);

Input.displayName = 'Input';

export { Input };
