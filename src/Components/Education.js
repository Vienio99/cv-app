import React from 'react'

class Education extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isEdited: true,
      schoolName: '',
      subject: '',
      degree: '',
      location: '',
      startDate: '',
      endDate: ''
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
    const { schoolName, subject, degree, location, startDate, endDate } = this.state
    if (this.state.isEdited) {
      return (
        <form id='education' onSubmit={handleSubmit}>
          <input
            type='text'
            name='schoolName'
            placeholder='School name'
            value={schoolName}
            onChange={handleChange}
            className='field'
          />
          <input
            type='text'
            name='degree'
            placeholder='Degree'
            value={degree}
            onChange={handleChange}
            className='field'
          />
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            value={subject}
            onChange={handleChange}
            className='field'
          />
          <input
            type='text'
            name='location'
            placeholder='Location'
            value={location}
            onChange={handleChange}
            className='field'
          />
          <input
            type='date'
            name='startDate'
            placeholder='Start date'
            value={startDate}
            onChange={handleChange}
            className='field'
          />
          <input
            type='date'
            name='endDate'
            placeholder='End date'
            value={endDate}
            onChange={handleChange}
            className='field'
          />
          <input type='submit' />
        </form>
      )
    } else {
      return (
        <div>
          <p>School name: {schoolName}</p>
          <p>Degree: {degree}</p>
          <p>Subject: {subject}</p>
          <p>Location: {location}</p>
          <p>Start date: {startDate}</p>
          <p>End date: {endDate}</p>
          <button type='button' value='Edit' onClick={handleSubmit}>Edit</button>
        </div>
      )
    }
  }
}

export default Education
