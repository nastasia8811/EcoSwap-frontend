import Modal from '../../../../components/Modal/Modal';
import './ModalErrorRegistration.scss';
import { useSelector } from "react-redux";
import { selectorRegistrationMessageError } from "../../../../selectors";
import {Button} from "@mui/material";
import React from "react";

interface ModalErrorRegistrationProps {
  closeErrorModal: () => void;
}

const ModalErrorRegistration: React.FC<ModalErrorRegistrationProps> = ({ closeErrorModal }) => {
  const closeModalError = useSelector(selectorRegistrationMessageError);

  return (
    <Modal
      modalAction={closeErrorModal}
      closeAction={closeErrorModal}
    >
      <p className="modal_title">{closeModalError}</p>
      <p className="modal_title__login">Please try again or login</p>
      <Button className="form-block__btn" style={{margin:'0 auto', display:'flex'}} variant="outlined"  color="error" onClick={closeErrorModal}>close</Button>
    </Modal>
  );
};

export default ModalErrorRegistration;
