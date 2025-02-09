import { forwardRef, useState } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { Eye, EyeClosed } from 'phosphor-react-native';
import { styles } from './styles';
import { colors } from '../../styles';

type InputProps = TextInputProps & {
  title: string;
  width?: 'LG' | 'SM';
  height?: 'LG' | 'SM';
  secure?: boolean;
};

const Input = forwardRef<TextInput, InputProps>(
  ({ title, width, height, secure = false, ...rest }, ref) => {
    const [secureText, setSecureText] = useState(true);

    return (
      <View
        style={[
          styles.container,
          { width: width === 'LG' ? '100%' : '50%' },
          { height: height === 'LG' ? 60 : 40 },
        ]}
      >
        <Text style={styles.text}>{title}</Text>
        <View style={styles.containerInput}>
          <TextInput
            style={[styles.inputText, { textAlignVertical: 'top' }]}
            secureTextEntry={secure ? secureText : false}
            ref={ref}
            {...rest}
          />
          {secure && (
            <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eye}>
              {secureText ? <EyeClosed color={colors.black}/> : <Eye color={colors.black}/>}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
);

Input.displayName = 'Input';

export { Input };