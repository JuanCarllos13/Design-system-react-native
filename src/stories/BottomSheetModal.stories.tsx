import React, { useState } from 'react';
import { Text } from 'react-native';
import BottomSheetModal from '../components/Modal/';
import { Button } from '../components/Button/Button';

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
