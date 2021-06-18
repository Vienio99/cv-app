import React from 'react'

class Personal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      isEdited: true
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.state.isEdited ? this.setState({ isEdited: false }) : this.setState({ isEdited: true })
  }

  handleChange (e) {
    e.preventDefault()
    const value = e.target.value
    this.setState({
      ...this.state,
      [e.target.name]: value
    })
  }

  render () {
    const { handleSubmit, handleChange } = this
    const { firstName, lastName, email, phoneNumber } = this.state
    if (this.state.isEdited) {
      return (
        <div className='personal-info'>
          <h2>Personal information</h2>
          <form id='personal' onSubmit={handleSubmit}>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={handleChange}
              className='field'
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={handleChange}
              className='field'
            />
            <input
              type='email'
              name='email'
              placeholder='E-mail'
              value={email}
              onChange={handleChange}
              className='field'
            />
            <input
              type='number'
              name='phoneNumber'
              placeholder='Phone Number'
              value={phoneNumber}
              onChange={handleChange}
              className='field'
            />
            <input type='submit' />
          </form>
        </div>
      )
    } else {
      return (
        <div className='personal-info'>
          <h2>Personal information</h2>
          <p>First name: {firstName}</p>
          <p>Last name: {lastName}</p>
          <p>E-mail: {email}</p>
          <p>Phone Number: {phoneNumber}</p>
          <button type='button' value='Edit' onClick={handleSubmit}>Edit</button>
        </div>

      )
    }
  }
}

export default Personal
