import {Box} from "@mui/material";
import React, { ReactNode, MouseEventHandler } from 'react';
import './Modal.scss';

interface ModalProps {
  children: ReactNode;
  modalAction: MouseEventHandler<HTMLButtonElement>;
  closeAction: MouseEventHandler<HTMLDivElement>;
}

const Modal: React.FC<ModalProps> = ({ children, closeAction }) => {
  return (
    <div className="wrapper">
      <div className="modal-wrapper" onClick={closeAction}>
        <Box className="modal-block" onClick={(e) => e.stopPropagation()}>
          {children}
        </Box>
      </div>
    </div>
  );
};

export default Modal;
