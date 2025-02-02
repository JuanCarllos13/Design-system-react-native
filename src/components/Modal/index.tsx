import React, { useState, useRef, useEffect } from 'react';
import {
  Modal,
  Animated,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { colors } from '../../styles/colors';
import { X } from 'phosphor-react-native';

const { height: winHeight } = Dimensions.get('window'); // Pegando a altura da tela

interface BottomSheetModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode; // Aceita qualquer conteúdo dentro do modal
}

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  visible = false,
  onClose,
  children,
}) => {
  const [showModal, setShowModal] = useState(visible);

  const translateY = useRef(new Animated.Value(winHeight)).current;

  const openModal = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(translateY, {
      toValue: winHeight,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    if (visible) {
      setShowModal(true);
      openModal();
    } else {
      closeModal();
    }
  }, [visible]);

  return (
    <Modal transparent visible={showModal} animationType="none">
      <View style={styles.overlay}>
        <Animated.View
          style={[styles.modalContainer, { transform: [{ translateY }] }]}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <X size={30} color={colors.gray[600]} />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>{children}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: colors.gray[100],
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  header: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'transparent',
  },
  content: {
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: colors.gray[600],
    marginBottom: 20,
  },
});

export default BottomSheetModal;
