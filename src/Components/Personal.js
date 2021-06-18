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
    this.setState({
      isEdited: false
    })
    console.log('ok')
  }

  handleChange (e) {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
    })
  }

  render () {
    const { handleSubmit, handleChange } = this
    return (
      <div className='personal-info'>
        <h2>Personal information</h2>
        <form id='personal' onSubmit={handleSubmit}>
          <input type='text' placeholder='First Name' className='field' value={this.state.firstName} onChange={handleChange} />
          <input type='text' placeholder='Last Name' className='field' value={this.state.lastName} onChange={handleChange} />
          <input type='email' placeholder='E-mail' className='field' value={this.state.email} onChange={handleChange} />
          <input type='text' placeholder='Phone Number' className='field' value={this.state.phoneNumber} onChange={handleChange} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Personal
