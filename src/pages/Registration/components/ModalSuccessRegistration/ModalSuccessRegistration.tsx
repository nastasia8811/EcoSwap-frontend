import Modal from '../../../../components/Modal/Modal';
import './ModalSuccessRegistration.scss';
import {Button} from "@mui/material";


interface ModalSuccessRegistrationProps {
  closeModal: () => void;
}

const ModalSuccessRegistration: React.FC<ModalSuccessRegistrationProps> = ({ closeModal }) => {
  return (
      <Modal
          modalAction={closeModal}
          closeAction={closeModal}
      >
        <p className="modal_title"> Successful registration! </p>
        <Button className="form-block__btn" style={{margin:'0 auto', display:'flex'}} variant="outlined"  color="success" onClick={closeModal}>close</Button>
      </Modal>
  );
};

export default ModalSuccessRegistration;
