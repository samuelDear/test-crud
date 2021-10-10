import classes from '../styles/components/Modal.module.css';

const Modal = ({ children, closeModal, ...props }) => {
  return (
    <div className={classes.modalBackground}>
      <div className={classes.modalBox} {...props}>
        <div className={`flex justify-end`}>
          <span
            className={`${classes.closeButton}`}
            onClick={() => closeModal()}>
            X
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
