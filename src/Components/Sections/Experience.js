import React, { Component } from 'react'

class Experience extends Component {
  render () {
    const { fields, handleChange, dataId } = this.props
    return (
      <div className='inputFields'>
        <form className='forms'>
          <input
            type='text'
            name='position'
            placeholder='Position'
            value={fields.position.text}
            onChange={(e) => handleChange(e, dataId)}
            className='field'
            key={fields.position.key}
            required
          />
          <input
            type='text'
            name='company'
            placeholder='Company'
            value={fields.company.text}
            onChange={(e) => handleChange(e, dataId)}
            className='field'
            key={fields.company.key}
            required
          />
          <input
            type='text'
            name='location'
            placeholder='Location'
            value={fields.location.text}
            onChange={(e) => handleChange(e, dataId)}
            className='field'
            key={fields.location.key}
            required
          />
          <input
            type='date'
            name='startDate'
            placeholder='Start date'
            value={fields.startDate.text}
            onChange={(e) => handleChange(e, dataId)}
            className='field'
            key={fields.startDate.key}
            required
          />
          <input
            type='date'
            name='endDate'
            placeholder='End date'
            value={fields.endDate.text}
            onChange={(e) => handleChange(e, dataId)}
            className='field'
            key={fields.endDate.key}
            required
          />
        </form>
      </div>
    )
  }
}

export default Experience
