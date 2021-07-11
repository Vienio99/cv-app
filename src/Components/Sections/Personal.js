import React, { Component } from 'react'

class Personal extends Component {
  render () {
    const { fields, handleChange, dataId } = this.props
    return (
      <div className='inputFields'>
        <form className='forms' data-id={dataId}>
          <input
            type='text'
            name='firstName'
            placeholder='First name'
            value={fields.firstName.text}
            onChange={(e) => handleChange(e, dataId)}
            className='field'
            key={fields.firstName.key}
            required
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last name'
            value={fields.lastName.text}
            onChange={(e) => handleChange(e, dataId)}
            className='field'
            key={fields.lastName.key}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={fields.email.text}
            onChange={(e) => handleChange(e, dataId)}
            className='field'
            key={fields.email.key}
            required
          />
          <input
            type='number'
            name='phoneNumber'
            placeholder='Phone number'
            value={fields.phoneNumber.text}
            onChange={(e) => handleChange(e, dataId)}
            className='field'
            key={fields.phoneNumber.key}
            required
          />
        </form>
      </div>
    )
  }
}

export default Personal
