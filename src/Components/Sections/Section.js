import React from 'react'
import Form from './Form.js'
import Submitted from './Submitted.js'

class Section extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      personal: {
        isEdited: true,
        firstName: { text: '', type: 'text', title: 'First name', key: 1 },
        lastName: { text: '', type: 'text', title: 'Last name', key: 2 },
        email: { text: '', type: 'email', title: 'E-mail', key: 3 },
        phoneNumber: { text: '', type: 'number', title: 'Phone number', key: 4 }
      },
      experience: {
        isEdited: true,
        position: { text: '', type: 'text', title: 'Position', key: 1 },
        company: { text: '', type: 'text', title: 'Company', key: 2 },
        location: { text: '', type: 'text', title: 'Location', key: 3 },
        startDate: { text: '', type: 'date', title: 'Start date', key: 4 },
        endDate: { text: '', type: 'date', title: 'End date', key: 5 }
      },
      education: {
        isEdited: true,
        schoolName: { text: '', type: 'text', title: 'School name', key: 1 },
        subject: { text: '', type: 'text', title: 'Subject', key: 2 },
        degree: { text: '', type: 'text', title: 'Degree', key: 3 },
        location: { text: '', type: 'text', title: 'Location', key: 4 },
        startDate: { text: '', type: 'date', title: 'Start date', key: 5 },
        endDate: { text: '', type: 'date', title: 'End date', key: 6 }
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    const section = this.props.sectionName
    if (this.state[section].isEdited) {
      this.setState({ [section]: { ...this.state[section], isEdited: false } })
    } else {
      this.setState({ [section]: { ...this.state[section], isEdited: true } })
    }
  }

  handleChange (e) {
    e.preventDefault()
    const value = e.target.value
    const field = e.target.name
    const section = this.props.sectionName
    this.setState({
      [section]: {
        ...this.state[section],
        [field]: {
          ...this.state[section][field], text: value
        }
      }
    })
  }

  render () {
    const { handleSubmit, handleChange } = this
    const { sectionName } = this.props
    const fields = this.state[sectionName]
    if (fields.isEdited) {
      return (
        <div>
          <form className='forms' onSubmit={handleSubmit}>
            <div>
              <Form fields={fields} handleChange={handleChange} />
            </div>
            <input type='submit' />
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <Submitted fields={fields} />
          <button type='button' value='Edit' name={sectionName} onClick={handleSubmit}>Edit</button>
        </div>
      )
    }
  }
}

export default Section
