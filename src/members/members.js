import React, { Component } from 'react';
//import { members2 } from '../sampledata';
import girl from '../img/girl.png'
import boy from '../img/boy.png'
import request from 'superagent'
import Membersmodal from './membersmodal'

class Members extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {members: [], loading: true, editing: undefined}
    this.addNew = this.addNew.bind(this)
    this.showEditor = this.showEditor.bind(this)
    this.hideEditor = this.hideEditor.bind(this)
    this.saveEditor = this.saveEditor.bind(this)
  }

  componentWillMount() {
      var url = 'https://clubmember.herokuapp.com/api/members'  
      request.get(url).end((err, res) => {
        if (err) {
            console.error(err)
        } else {
            const parsed = JSON.parse(res.text)
            this.setState({...this.state, loading: false, members: parsed.data})
        }
     })
  }
  
  addNew() {
    this.setState({...this.state, editing: {isNew: true}})
  }
  
  showEditor(member) {
    this.setState({...this.state, editing: true})
  }

  hideEditor() {
    this.setState({...this.state, editing: undefined})
  }
  
  saveEditor() {
  }
  
  renderEditor() {
    if (this.state.editing) {
      return <Membersmodal member={ this.state.editing } onSave={ this.saveEditor } onCancel={ this.hideEditor } />
    }
  }
  
  
  render() {
      return (
        <div>
          <div className="mui-content-wrapper">
              <div className="mui-container">
              <div className="mui-row">
                  <button className="mui--align-top mui-btn mui-btn-small mui-btn--primary mui-btn--fab mui--pull-right" onClick={ this.addNew }>+</button>
              </div>
              </div>  
              <div className="mui-row">
                  { this.state.members.map(member => {
                    return (
                        <div key={ member.memberid } className="mui-col-md-4">
                            <div className="mui-panel mui-panel-default">
                                <div className="mui-panel-heading">
                                    <a href="#" className="mui-pull-right mui-text-muted"><em className="fa"></em></a>
                                </div>
                                <div className="mui-panel-body mui-text-center">
                                    <img src={ member.gender === 'Male'? boy : girl } alt="Contact" className="mui-center-block circle"/>
                                    <h4>{ member.firstname + ' ' + member.lastname} </h4>
                                    <p>DOB: { member.dateofbirth}</p>
                                    <p>AddressID: { member.addressid}</p>
                                    <p>ContactID: { member.contactid}</p>
                                </div>
                                <div className="mui-panel-footer mui-clearfix">
                                </div>
                            </div>
                        </div>
                    )
                }) }
            </div>
        </div>
        { this.renderEditor() }
     </div>
    )
  }

}

export default Members
