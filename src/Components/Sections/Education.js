import React, { Component } from 'react'

class Education extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: {
        isEdited: true,
        schoolName: { text: '', type: 'text', title: 'School name' },
        subject: { text: '', type: 'text', title: 'Subject' },
        degree: { text: '', type: 'text', title: 'Degree' },
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
                  section='education'
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
          <button type='button' value='Edit' name='education' onClick={handleSubmit}>Edit</button>
        </div>
      )
    }
  }
}

export default Education
