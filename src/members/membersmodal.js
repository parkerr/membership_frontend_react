import React, { Component } from 'react'
import Modal from 'react-bootstrap-modal'



class MembersModal extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {member: {...props.member}}

  }



  render() {
    const member = this.state.member
    return (
      <Modal 
                show= {true} 
        onHide={ this.props.onCancel } large>
        <Modal.Header>
		<Modal.Title id='ModalHeader'></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container-fluid edit-form'>
            <div className='row'>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
          <button className='btn btn-primary'>Save</button>
        </Modal.Footer>
      </Modal>
    )
  }

}

export default MembersModal