import React, { Component } from 'react'
import Modal from 'react-bootstrap-modal'

import { diffObjects } from './util'

import DetailsEditor from './DetailsEditor'



class MembersModal extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {member: {...props.query}}
    this.onClickSave = this.onClickSave.bind(this)
  }


  onClickSave() {
    this.props.onSave(this.state.query, this.state.subject, this.state.body)
  }


  render() {
    const member = this.state.member
    return (
      <Modal 
        show={ !! member } 
        onHide={ this.props.onCancel }
        aria-labelledby="ModalHeader"
        large>
        <Modal.Header>
		<Modal.Title id='ModalHeader'>Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container-fluid edit-form'>
            <div className='row'>
              <div className='col-md-6 edit-form__details'>

                <MemberEditor
                  member={ member }
                />

              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
          <button className='btn btn-primary' onClick={ this.onClickSave }>Save</button>
        </Modal.Footer>
      </Modal>
    )
  }

}

export default MembersModal