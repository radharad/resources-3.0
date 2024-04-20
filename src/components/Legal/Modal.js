import "./Modal.css";

const Modal = ({ children, show, onClose}) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose} />
        <div className={`modal-wrapper ${show ? "active" : ""}`}>
          <div className="modal-content">
            <div className="modal-header">
              <div></div>
              <div onClick={onClose} className="modal-close">
                X
              </div>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </>
    )
  );
};

export default Modal;
