import React, { Component } from 'react'

class Experience extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: {
        isEdited: true,
        position: { text: '', type: 'text', title: 'Position' },
        company: { text: '', type: 'text', title: 'Company' },
        location: { text: '', type: 'text', title: 'Location' },
        startDate: { text: '', type: 'date', title: 'Start date' },
        endDate: { text: '', type: 'date', title: 'End date' }
      }
    }
    this.handleChange = this.handleAdd.bind(this)
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
                  section='experience'
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
          <button type='button' value='Edit' name='experience' onClick={handleSubmit}>Edit</button>
        </div>
      )
    }
  }
}

export default Experience
