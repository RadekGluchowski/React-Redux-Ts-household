import React from "react";
import Modal from "react-modal";
import './ModalPopup.css'

interface ModalPopupProps {
  isModalOpen: boolean
  handleClosePopup(): void;
  contentLabel: string;
  customStyles: object;
}

export const ModalPopup: React.FC<ModalPopupProps> = ({
  isModalOpen,
  handleClosePopup,
  contentLabel,
  children,
  customStyles,
}) => {

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleClosePopup}
      contentLabel={contentLabel}
      className="Modal"
      overlayClassName="Overlay"
      style={customStyles}
      appElement={document.getElementById('root') as HTMLElement}
    >
      {children}
    </Modal>
  );
};
