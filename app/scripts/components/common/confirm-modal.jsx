import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import ModalTrigger from 'react-bootstrap/lib/ModalTrigger';

class ConfirmModal extends React.Component {
  constructor() {
    this.handleYes = this.handleYes.bind(this);
    this.handleNo = this.handleNo.bind(this);
  }

  handleYes() {
    if (this.props.onYes) {
      this.props.onYes();
    }
    this.props.onRequestHide();
  }

  handleNo() {
    if (this.props.onNo) {
      this.props.onNo();
    }
    this.props.onRequestHide();
  }

  render() {
    return (
      <Modal {...this.props}>
        <div className="modal-header">
          Вы уверены?
        </div>
        <div className="modal-body">
          { this.props.text }
        </div>
        <div className="modal-footer">
          <div className="btn-group">
            <button type="button" className="btn btn-primary" onClick={ this.handleYes }>Да</button>
            <button type="button" className="btn btn-default" onClick={ this.handleNo }>Нет</button>
          </div>
        </div>
      </Modal>
    )
  }
}

export default class ConfirmModalTrigger extends React.Component {
  render() {
    return (
      <ModalTrigger modal={ <ConfirmModal {...this.props} /> }>
        {this.props.children}
      </ModalTrigger>
    )
  }
}
