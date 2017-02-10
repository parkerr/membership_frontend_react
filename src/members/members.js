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
    this.delete = this.delete.bind(this)
  }

  componentWillMount() {
      this.getMembers()
  }
  
  addNew() {
    this.setState({...this.state, editing: {isNew: true, firstname:'',middlename:'',lastname:''}})
  }
  
  delete(member) {
      
      const url = 'https://clubmember.herokuapp.com/api/members/' + member.memberid
      request.delete(url).end((err, res) => {
        if (err) {
            console.error(err)
        } else {
            this.getMembers()
        }
     })
  }
  
  showEditor(member) {
    this.setState({...this.state, editing: member})
  }

  hideEditor() {
    this.setState({...this.state, editing: undefined})
  }
  
  getMembers() {
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
  
  saveEditor(updatedMember) {
    const originalMember = this.state.editing

    this.setState({...this.state, editing: undefined, activity: 'Saving'})

     // const shouldSaveQuery = diffObjects(updatedQuery, originalQuery);

        // TODO: save query record then call saveNote when completed successfully
        if (originalMember.isNew) {
          this.saveNewMember(updatedMember)
        } else {
          //Update the record
		  //this.updateQuery(updatedQuery, noteSubject, noteBody)
        }
    }

  
  renderEditor() {
    if (this.state.editing) {
      return <Membersmodal member={ this.state.editing } onSave={ this.saveEditor } onCancel={ this.hideEditor } />
    }
  }
  
  getNextMember() {
    
      return this.state.members.length + 100

  }
  
  
  saveNewMember(member) {
      console.log(member)
      //Sort out defaults for the backend
      if(member.firstname === undefined){member.firstname = ''}
      if(member.middlename === undefined){member.middlename = ''}
      if(member.lastname === undefined){member.lastname = ''}
      
      
    const url = 'https://clubmember.herokuapp.com/api/createmember'
    request.post(url)
    .send({
      firstname: member.firstname,
      middlename: member.middlename,
      lastname: member.lastname,
      gender: "M",
        dobday: "07",
        dobmonth: "8",
        dobyear: "1975"
    })
    .end((err, res) => {
      if (err) {
        console.error(err)
      }
      else {
        this.getMembers()
      }
    })
  }
  
  
  
  
  
  
  render() {
      return (
        <div>
          <div className="mui-content-wrapper">
              <div className="mui-container">
              <div className="mui-row">
                  <button className="mui--align-top mui-btn mui-btn-small mui-btn--primary mui-btn--fab mui--pull-right" onClick={ this.addNew }>
                  <i className="material-icons md-24 vertical-align-middle padding-bottom-3">add</i>
                  </button>
              </div>
              </div>  
              <div className="mui-row">
                  { this.state.members.map(member => {
                    return (
                        <div key={ member.memberid } className="mui-col-md-3">
                            <div className="mui-panel mui-panel-default">
                                <div className="mui-panel--header">
                                <div className="mui-dropdown mui--pull-left">
                                    <button className="mui-btn mui-btn--small mui-btn--primary mui-btn--flat no-padding" data-mui-toggle="dropdown">
                                    <i className="material-icons md-24 vertical-align-middle padding-bottom-3">more_vert</i>
                                    </button> 
                                    <ul className="mui-dropdown__menu">
                                    <li><button className="mui-btn mui-btn--primary mui-btn--flat" onClick={ this.delete.bind(this, member) }>
                                    <i className="material-icons md-18 vertical-align-middle padding-bottom-3">delete</i>
                                    </button>   delete</li>
                                    <li><button className="mui-btn mui-btn--primary mui-btn--flat" onClick={ this.showEditor.bind(this, member) }>
                                    <i className="material-icons md-18 vertical-align-middle padding-bottom-3">edit</i>
                                    </button>   edit</li>
                                    </ul>
                                </div>
                                </div>
                                <div className="mui-panel--body mui-text-center">
                                    <img src={ member.gender === 'Male  '? boy : girl } alt="Contact" className="circle" style={{marginLeft:"40px"}}/>
                                    <p className="mui--text-dark mui--text-subhead">{ member.firstname + ' ' + member.lastname} </p>
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
