import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Modal,Button} from 'react-bootstrap';
import {closeAlertModal} from './alertModal.action';

class alertModal extends Component {
  constructor(props, context) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.dispatch(closeAlertModal());
  }

  handleShow() {
    this.props.dispatch(closeAlertModal());
  }

  render() {
    return (
      <div>
        <Modal show={this.props.alertModal.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Alert</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {this.props.alertModal.msg}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      alertModal : state.alertModal ? state.alertModal.toJS() : null,
    }
};

export default connect(mapStateToProps)(alertModal);
