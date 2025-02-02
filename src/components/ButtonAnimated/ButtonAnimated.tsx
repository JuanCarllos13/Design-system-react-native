import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Animated,
  TouchableOpacityProps,
  Dimensions,
} from 'react-native';
import { colors } from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

interface AnimatedButtonProps extends TouchableOpacityProps {
  title?: string;
  onPress: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  title = 'Enviar',
  onPress,
  ...rest
}) => {
  const [loading, setLoading] = useState(false);

  const widthAnim = useRef(new Animated.Value(winWidth - 40)).current;
  const borderRadiusAnim = useRef(new Animated.Value(10)).current;

  const animate = (toWidth: number, toRadius: number, duration: number) => {
    Animated.timing(widthAnim, {
      toValue: toWidth,
      duration,
      useNativeDriver: false,
    }).start();

    Animated.timing(borderRadiusAnim, {
      toValue: toRadius,
      duration,
      useNativeDriver: false,
    }).start();
  };

  const handlePress = () => {
    setLoading(true);
    animate(50, 25, 300);

    onPress();

    setTimeout(() => {
      setLoading(false);
      animate(winWidth - 40, 10, 300);
    }, 2000);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      disabled={loading}
      {...rest}
    >
      <Animated.View
        style={{
          width: widthAnim,
          height: 60,
          borderRadius: borderRadiusAnim,
          backgroundColor: colors.blue.base,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {loading ? (
          <ActivityIndicator color={colors.gray[100]} />
        ) : (
          <Text
            style={{
              color: colors.gray[100],
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            {title}
          </Text>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default AnimatedButton;
