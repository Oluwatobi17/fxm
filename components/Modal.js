const Modal = ({closeModal, children }) =>{
    return <div className="modal-container">
        <div className="modal" onClick={closeModal}></div>

        <div className="modal-content">
            {children}
        </div>
    </div>
}

export default Modal;