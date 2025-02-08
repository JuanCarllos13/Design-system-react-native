import React, { useState } from 'react';
import { Text } from 'react-native';
import { Button } from '../components/Button';
import { BottomSheetModal } from '@components/Modal';

export default {
  title: 'Example/BottomSheetModal',
  component: BottomSheetModal,
  tags: ['autodocs'],
};

export const Default = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <BottomSheetModal visible={modalVisible} onClose={toggleModal}>
      <Text>Modal</Text>
      <Button>
        <Button.Title>Fechar</Button.Title>
      </Button>
    </BottomSheetModal>
  );
};
