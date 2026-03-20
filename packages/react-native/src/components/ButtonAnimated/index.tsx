import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  Text,
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
  const [containerWidth, setContainerWidth] = useState(defaultWidth);
  const containerWidthRef = useRef(defaultWidth);

  const widthAnim = useRef(new Animated.Value(defaultWidth)).current;
  const heightAnim = useRef(new Animated.Value(60)).current;
  const borderRadiusAnim = useRef(new Animated.Value(10)).current;

  const animate = (
    toWidth: number,
    toHeight: number,
    toRadius: number,
    duration: number
  ) => {
    Animated.parallel([
      Animated.timing(widthAnim, {
        toValue: toWidth,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(heightAnim, {
        toValue: toHeight,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(borderRadiusAnim, {
        toValue: toRadius,
        duration,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    if (width > 0) {
      containerWidthRef.current = width;
      setContainerWidth(width);
      widthAnim.setValue(width);
    }
  };

  const handlePress = () => {
    setLoading(true);
    animate(50, 50, 25, 300); // Encolhe e fica redondo (círculo perfeito)

    onPress();

    setTimeout(() => {
      setLoading(false);
      animate(containerWidthRef.current, 60, 10, 300);
    }, 2000);
  };

  const marginLeft = widthAnim.interpolate({
    inputRange: [50, containerWidth],
    outputRange: [(containerWidth - 50) / 2, 0],
    extrapolate: 'clamp',
  });

  return (
    <TouchableOpacity
      onPress={handlePress}
      onLayout={handleLayout}
      activeOpacity={0.8}
      disabled={loading}
      style={[{ width: '100%' }, style]}
      {...rest}
    >
      <Animated.View
        style={{
          width: widthAnim,
          height: heightAnim,
          borderRadius: borderRadiusAnim,
          backgroundColor: colors.blue.base,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: marginLeft,
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
