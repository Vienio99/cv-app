import React, { Component } from 'react'

class Education extends Component {
  render () {
    const { fields, handleChange, dataId } = this.props
    return (
      <div className='inputFields'>
        <form className='forms' data-id={dataId}>
          <input
            type='text'
            name='schoolName'
            placeholder='School name'
            value={fields.schoolName.text}
            onChange={(e) => handleChange(e, dataId)}
            className='field'
            key={fields.schoolName.key}
            required
          />
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            value={fields.subject.text}
            onChange={(e) => handleChange(e, dataId)}
            className='field'
            key={fields.subject.key}
            required
          />
          <input
            type='text'
            name='degree'
            placeholder='Degree'
            value={fields.degree.text}
            onChange={(e) => handleChange(e, dataId)}
            className='field'
            key={fields.degree.key}
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

export default Education
