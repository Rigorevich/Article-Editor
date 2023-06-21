import React from "react";
import Modal from "react-modal";
import styled from "./ConfirmModal.module.css";
import Button from "../Button";

type Props = {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal: React.FC<Props> = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal className={styled.modal} isOpen={isOpen}>
      <div className={styled.message}>{message}</div>
      <div className={styled.buttons}>
        <Button secondary onClick={onConfirm}>
          Удалить
        </Button>
        <Button primary onClick={onCancel}>
          Отмена
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
