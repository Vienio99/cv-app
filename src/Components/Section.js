import React from 'react'
import uniqid from 'uniqid'

class Section extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      personal: {
        isEdited: true,
        firstName: { text: '', type: 'text', title: 'First name' },
        lastName: { text: '', type: 'text', title: 'Last name' },
        email: { text: '', type: 'email', title: 'E-mail' },
        phoneNumber: { text: '', type: 'number', title: 'Phone number' }
      },
      experience: {
        isEdited: true,
        position: { text: '', type: 'text', title: 'Position' },
        company: { text: '', type: 'text', title: 'Company' },
        location: { text: '', type: 'text', title: 'Location' },
        startDate: { text: '', type: 'date', title: 'Start date' },
        endDate: { text: '', type: 'date', title: 'End date' }
      },
      education: {
        isEdited: true,
        schoolName: { text: '', type: 'text', title: 'School name' },
        subject: { text: '', type: 'text', title: 'Subject' },
        degree: { text: '', type: 'text', title: 'Degree' },
        location: { text: '', type: 'text', title: 'Location' },
        startDate: { text: '', type: 'date', title: 'Start date' },
        endDate: { text: '', type: 'date', title: 'End date' }
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
    const inputFields = []
    const paraFields = []
    for (const fieldName in this.state[sectionName]) {
      if (fieldName !== 'isEdited') {
        if (this.state[sectionName].isEdited) {
          inputFields.push(
          <input
            type={this.state[sectionName][fieldName].type}
            name={fieldName}
            section={sectionName}
            placeholder={this.state[sectionName][fieldName].title}
            value={this.state[sectionName][fieldName].text}
            onChange={handleChange}
            className='field'
          />
          )
        } else {
          paraFields.push(
            <p key={uniqid()}>{this.state[sectionName][fieldName].title}: {this.state[sectionName][fieldName].text}</p>
          )
        }
      }
    }
    if (this.state[sectionName].isEdited) {
      return (
        <form id={sectionName} onSubmit={handleSubmit}>
          {inputFields}
          <input type='submit' />
        </form>
      )
    } else {
      return (
        <div>
          {paraFields}
          <button type='button' value='Edit' name={sectionName} onClick={handleSubmit}>Edit</button>
        </div>
      )
    }
  }
}

export default Section
