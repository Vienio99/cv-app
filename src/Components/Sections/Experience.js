import React, { Component } from 'react'

class Experience extends Component {
  render () {
    const fields = {
      isEdited: true,
      position: { text: this.props.position, type: 'text', title: 'Position' },
      company: { text: '', type: 'text', title: 'Company' },
      location: { text: '', type: 'text', title: 'Location' },
      startDate: { text: '', type: 'date', title: 'Start date' },
      endDate: { text: '', type: 'date', title: 'End date' }
    }
    // { handleChange } = this.props
    return (
      <div>
        {fields.map(field =>
          <input
            type={field.type}
            name={field}
            section='experience'
            placeholder={field.title}
            value={field.text}
            onChange={handleChange}
            className='field'
            key=''
          />
        )}
      </div>
    )
  }
}

export default Experience
