import { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  LayoutChangeEvent,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  View,
  ViewStyle,
  ActivityIndicator,
} from "react-native";

import { colors } from "../../styles";

interface AnimatedButtonProps
  extends Omit<
    PressableProps,
    "style" | "children" | "onPress"
  > {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  textColor?: string;
}

export function AnimatedButton({
  title,
  onPress,
  disabled = false,
  style,
  backgroundColor = colors.blue.base,
  textColor = colors.gray[100],
  ...rest
}: AnimatedButtonProps) {
  const [loading, setLoading] = useState(false);
  const layoutWidthRef = useRef(0);

  const widthAnim = useRef(new Animated.Value(300)).current;
  const heightAnim = useRef(new Animated.Value(56)).current;
  const animateToCircle = () => {
    Animated.parallel([
      Animated.timing(widthAnim, {
        toValue: 56,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(heightAnim, {
        toValue: 56,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animateToFull = () => {
    const targetWidth =
      layoutWidthRef.current || Dimensions.get("window").width - 32;
    Animated.parallel([
      Animated.timing(widthAnim, {
        toValue: targetWidth,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(heightAnim, {
        toValue: 56,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    if (width > 0) {
      layoutWidthRef.current = width;
      widthAnim.setValue(width);
    }
  };

  const handlePress = () => {
    if (disabled || loading) return;

    setLoading(true);
    animateToCircle();

    onPress();

    setTimeout(() => {
      setLoading(false);
      animateToFull();
    }, 2000);
  };

  return (
    <View
      onLayout={handleLayout}
      style={[
        {
          width: "100%",
          alignSelf: "stretch",
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <Pressable
        onPress={handlePress}
        disabled={disabled || loading}
        style={{ alignItems: "center", justifyContent: "center" }}
        {...rest}
      >
        <Animated.View
          style={{
            width: widthAnim,
            height: heightAnim,
            borderRadius: 28,
            backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <ActivityIndicator color={textColor} size="small" />
          ) : (
            <Text
              style={{
                color: textColor,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
          )}
        </Animated.View>
      </Pressable>
    </View>
  );
}
