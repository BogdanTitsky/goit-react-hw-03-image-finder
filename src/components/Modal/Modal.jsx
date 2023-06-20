import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDawn);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDawn);
  }

  handleKeyDawn = event => {
    if (event.code === 'Escape') {
      this.props.onClickClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClickClose();
    }
  };

  render() {
    const { onClickClose, image } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img className="Modal-image" src={image} alt="error" />
        </div>
        <button type="button" className="Modal-close" onClick={onClickClose}>
          <span className="close">&times;</span>
        </button>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClickClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
