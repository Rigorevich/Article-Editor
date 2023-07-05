import React from 'react';
import Modal from 'react-modal';
import styled from './ConfirmModal.module.css';
import Button from '../Button';

type ModalProps = {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal = ({ isOpen, message, onConfirm, onCancel }: ModalProps) => {
  return (
    <Modal className={styled.modal} isOpen={isOpen}>
      <div className={styled.message}>{message}</div>
      <div className={styled.buttons}>
        <Button secondary onClick={onConfirm} data-test="confirm">
          Удалить
        </Button>
        <Button primary onClick={onCancel} data-test="cancel">
          Отмена
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
