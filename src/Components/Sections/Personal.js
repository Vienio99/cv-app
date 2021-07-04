import React, { Component } from 'react'
import Form from './Form.js'
import Submitted from './Submitted.js'

class Personal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isEdited: true,
      firstName: { text: '', type: 'text', title: 'First name' },
      lastName: { text: '', type: 'text', title: 'Last name' },
      email: { text: '', type: 'email', title: 'E-mail' },
      phoneNumber: { text: '', type: 'number', title: 'Phone number' }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    if (this.state.isEdited) {
      this.setState({ ...this.state, isEdited: false })
    } else {
      this.setState({ ...this.state, isEdited: true })
    }
  }

  handleChange (e) {
    e.preventDefault()
    const value = e.target.value
    const field = e.target.name
    console.log(field)
    this.setState({
      ...this.state,
      [field]: {
        ...this.state[field], text: value
      }
    })
  }

  render () {
    const fields = this.state
    const { handleChange, handleSubmit } = this
    if (fields.isEdited) {
      return (
        <div>
          <form className='forms' onSubmit={handleSubmit}>
            <div>
              <Form fields={fields} handleChange={handleChange} />
            </div>
            <input type='submit' />
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <Submitted fields={fields} />
          <button type='button' value='Edit' name='personal' onClick={handleSubmit}>Edit</button>
        </div>
      )
    }
  }
}

export default Personal
