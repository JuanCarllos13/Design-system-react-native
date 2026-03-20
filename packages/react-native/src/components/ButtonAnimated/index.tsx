import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  Animated,
  TouchableOpacityProps,
  LayoutChangeEvent,
  Dimensions,
} from 'react-native';

const { width: defaultWidth } = Dimensions.get('window');
import { colors } from '../../styles';

interface AnimatedButtonProps extends TouchableOpacityProps {
  title?: string;
  onPress: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  title = 'Enviar',
  onPress,
  style,
  ...rest
}) => {
  const [loading, setLoading] = useState(false);
  const containerWidthRef = useRef(defaultWidth);

  const widthAnim = useRef(new Animated.Value(defaultWidth)).current;
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

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    if (width > 0 && containerWidthRef.current !== width) {
      containerWidthRef.current = width;
      widthAnim.setValue(width);
    }
  };

  const handlePress = () => {
    const fullWidth = containerWidthRef.current || 300;
    setLoading(true);
    animate(50, 25, 300);

    onPress();

    setTimeout(() => {
      setLoading(false);
      animate(fullWidth, 10, 300);
    }, 2000);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      onLayout={handleLayout}
      activeOpacity={0.8}
      disabled={loading}
      style={[{ width: '100%' }, style]}
      {...rest}
    >
      <View style={{ width: '100%', alignItems: 'center' }}>
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

export { AnimatedButton };
