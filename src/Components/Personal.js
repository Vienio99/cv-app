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

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    if (this.state.isEdited) {
      this.setState({
        isEdited: false
      })
    } else {
      this.setState({
        isEdited: true
      })
    }
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
    const { handleClick, handleChange } = this
    const { firstName, lastName, email, phoneNumber } = this.state
    if (this.state.isEdited) {
      return (
        <div className='personal-info'>
          <h2>Personal information</h2>
          <form id='personal' onSubmit={handleClick}>
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
              type='text'
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
          <button type='button' value='Edit' onClick={handleClick}>Edit</button>
        </div>

      )
    }
  }
}

export default Personal
