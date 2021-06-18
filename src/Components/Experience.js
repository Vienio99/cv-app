import React from 'react'

class Experience extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isEdited: true,
      position: '',
      company: '',
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
    const { position, company, location, startDate, endDate } = this.state
    if (this.state.isEdited) {
      return (
        <div className='experience-info'>
          <h2>Experience</h2>
          <form id='experience' onSubmit={handleSubmit}>
            <input
              type='text'
              name='position'
              placeholder='Position'
              value={position}
              onChange={handleChange}
              className='field'
            />
            <input
              type='text'
              name='company'
              placeholder='Company'
              value={company}
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
        </div>
      )
    } else {
      return (
        <div className='experience-info'>
          <h2>Experience</h2>
          <p>Position: {position}</p>
          <p>Company: {company}</p>
          <p>Location: {location}</p>
          <p>Start date: {startDate}</p>
          <p>End date: {endDate}</p>
          <button type='button' value='Edit' onClick={handleSubmit}>Edit</button>
        </div>

      )
    }
  }
}

export default Experience
