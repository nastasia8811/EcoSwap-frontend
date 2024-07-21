import Modal from '../../../../components/Modal/Modal';
import { useState } from 'react';
import './ModalLoginError.scss';
import { useSelector } from "react-redux";
import { selectorMassageError } from "../../../../selectors";

interface ModalErrorRegistrationProps {
  closeErrorModal: () => void;
}

const ModalLoginError: React.FC<ModalErrorRegistrationProps> = ({ closeErrorModal }) => {
  const closeModalError = useSelector(selectorMassageError);
  //const navigate = useNavigate();
  const [isModalAuthOpen, setIsModalAuthOpen] = useState(false);

  const toggleModalAuth = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsModalAuthOpen(!isModalAuthOpen);
  };

  return (
    <Modal
      modalAction={closeErrorModal}
      closeAction={closeErrorModal}
    >
      <p className="modal_title">{closeModalError}</p>
      <p className="modal_title__login">Please try again</p>
      <button
        className="form-block__btn"
        type="button"
        onClick={toggleModalAuth}
      >
        Login
      </button>
    </Modal>
  );
};

export default ModalLoginError;
