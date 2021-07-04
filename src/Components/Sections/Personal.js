import React, { Component } from 'react'

class Personal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: {
        isEdited: true,
        firstName: { text: '', type: 'text', title: 'First name' },
        lastName: { text: '', type: 'text', title: 'Last name' },
        email: { text: '', type: 'email', title: 'E-mail' },
        phoneNumber: { text: '', type: 'number', title: 'Phone number' }
      }
    }
    this.handleChange = this.handleAdd.bind(this)
  }

  handleChange (e) {
    e.preventDefault()
    const value = e.target.value
    const field = e.target.name
    this.setState({
      fields: {
        ...this.state.fields,
        [field]: {
          ...this.state[field], text: value
        }
      }
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const fields = this.state.fields
    if (fields.isEdited) {
      this.setState({ fields: { ...this.state.fields, isEdited: false } })
    } else {
      this.setState({ fields: { ...this.state.fields, isEdited: true } })
    }
  }

  render () {
    const { fields } = this.state
    const { handleChange, handleSubmit } = this
    if (fields.isEdited) {
      return (
        <div>
          <form className='forms' onSubmit={handleSubmit}>
            <div>
              {fields.map(field =>
                <input
                  type={field.type}
                  name={field}
                  section='personal'
                  placeholder={field.title}
                  value={field.text}
                  onChange={handleChange}
                  className='field'
                  key=''
                />
              )}
            </div>
            <input type='submit' />
          </form>
        </div>
      )
    } else {
      return (
        <div>
          {fields.map(field =>
            <p key=''>{field}: {field.text}</p>
          )}
          <button type='button' value='Edit' name='personal' onClick={handleSubmit}>Edit</button>
        </div>
      )
    }
  }
}

export default Personal
