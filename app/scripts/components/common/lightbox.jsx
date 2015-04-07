import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import ModalTrigger from 'react-bootstrap/lib/ModalTrigger';

class LightBoxModal extends React.Component {
  render() {
    return (
      <Modal {...this.props}>
        <div className="modal-body">
          <img {...this.props} className="img-responsive" />
        </div>
      </Modal>
    )
  }
}

export default class LightBox extends React.Component {
  render() {
    return (
      <ModalTrigger modal={ <LightBoxModal {...this.props} /> }>
        <img {...this.props} className={ `${this.props.className} lightbox-trigger` } />
      </ModalTrigger>
    )
  }
}
