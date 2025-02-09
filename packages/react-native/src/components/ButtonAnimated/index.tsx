import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Animated,
  TouchableOpacityProps,
  Dimensions,
} from 'react-native';
import { colors } from '../../styles';

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

  const widthAnim = useRef(new Animated.Value(winWidth)).current; 
  const borderRadiusAnim = useRef(new Animated.Value(10)).current;

  const animate = (toWidth: number, toRadius: number, duration: number) => {
    // Anima a largura do botão
    Animated.timing(widthAnim, {
      toValue: toWidth,
      duration,
      useNativeDriver: false, // Usando 'false' porque estamos animando largura e bordas
    }).start();

    // Anima a borda do botão
    Animated.timing(borderRadiusAnim, {
      toValue: toRadius,
      duration,
      useNativeDriver: false, // Usando 'false' para animação de layout
    }).start();
  };

  const handlePress = () => {
    setLoading(true);
    animate(50, 25, 300); // Encolhe o botão para o meio

    onPress();

    setTimeout(() => {
      setLoading(false);
      animate(winWidth, 10, 300); // Volta ao tamanho original
    }, 2000);
  };

  // Calculando marginLeft com a interpolação do widthAnim
  const animatedMarginLeft = widthAnim.interpolate({
    inputRange: [50, winWidth], // O valor que o width pode ter
    outputRange: [winWidth / 2 - 25, 0], // Ajuste para centralizar a animação
    extrapolate: 'clamp', // Impede que o valor ultrapasse o range
  });

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
          marginLeft: animatedMarginLeft, // Aqui usamos o valor interpolado
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
