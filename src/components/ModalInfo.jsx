import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default function Modal({ children }) {
    const modalRoot = document.getElementById('modal-root');
    return ReactDOM.createPortal(
      <div className="modal">
        {children}
      </div>,
      modalRoot
    );
  }

 Modal.propTypes = {
   children: PropTypes.object
 }