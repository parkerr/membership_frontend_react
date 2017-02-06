import React, { Component } from 'react'
import Modal from 'react-bootstrap-modal'
import MembersDetails from './membersdetails'


class MembersModal extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {member: {...props.member}}
    this.onChangeFirstname = this.onChangeFirstname.bind(this)
    this.onChangeMiddlename = this.onChangeMiddlename.bind(this)
    this.onChangeLastname = this.onChangeLastname.bind(this)
    this.onChangeGender = this.onChangeGender.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }


  onChangeFirstname(value) {
    this.setState({...this.state, member:{...this.state.member, firstname: value}})
  }

  onChangeMiddlename(value) {
    this.setState({...this.state, member:{...this.state.member, middlename: value}})
  }

  onChangeLastname(value) {
    this.setState({...this.state, member:{...this.state.member, lastname: value}})
  }
  
  onChangeGender(value) {
    this.setState({...this.state, member:{...this.state.member, gender: value}})
  }

  onClickSave() {
    this.props.onSave(this.state.member)
  }
  
  canSave() {
      return true
  }
  
  render() {
    const member = this.state.member
      

      
    return (
      <Modal 
        show= {true} 
        onHide={ this.props.onCancel } small>
        <Modal.Header>
		<Modal.Title id='ModalHeader'>Create member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mui-container'>
            <div className='mui-row'>
              <MembersDetails
                member={ member }
                onChangeFirstname={ this.onChangeFirstname}
                onChangeMiddlename={ this.onChangeMiddlename }
                onChangeLastname={ this.onChangeLastname }
                onChangeGender={ this.onChangeGender }
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Dismiss className='mui-btn mui-btn--flat mui-btn--default'>Cancel</Modal.Dismiss>
          <button className='mui-btn mui-btn--flat mui-btn--primary' onClick={ this.onClickSave } disabled={ ! this.canSave() }>Save</button>
        </Modal.Footer>
      </Modal>
    )
  }

}

export default MembersModal