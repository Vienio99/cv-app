import React from 'react'
import uniqid from 'uniqid'
import Preview from './Preview.js'

class Section extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      personal: {
        // isEdited: true,
        firstName: { text: '', type: 'text', title: 'First name' },
        lastName: { text: '', type: 'text', title: 'Last name' },
        email: { text: '', type: 'email', title: 'E-mail' },
        phoneNumber: { text: '', type: 'number', title: 'Phone number' }
      },
      experience: {
        // isEdited: true,
        position: { text: '', type: 'text', title: 'Position' },
        company: { text: '', type: 'text', title: 'Company' },
        location: { text: '', type: 'text', title: 'Location' },
        startDate: { text: '', type: 'date', title: 'Start date' },
        endDate: { text: '', type: 'date', title: 'End date' }
      },
      education: {
        // isEdited: true,
        schoolName: { text: '', type: 'text', title: 'School name' },
        subject: { text: '', type: 'text', title: 'Subject' },
        degree: { text: '', type: 'text', title: 'Degree' },
        location: { text: '', type: 'text', title: 'Location' },
        startDate: { text: '', type: 'date', title: 'Start date' },
        endDate: { text: '', type: 'date', title: 'End date' }
      }
    }

    // this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // handleSubmit (e) {
  //   e.preventDefault()
  //   const section = this.props.sectionName
  //   if (this.state[section].isEdited) {
  //     this.setState({ [section]: { ...this.state[section], isEdited: false } })
  //   } else {
  //     this.setState({ [section]: { ...this.state[section], isEdited: true } })
  //   }
  // }

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
    const { handleChange } = this
    const { sectionName } = this.props
    const inputFields = []
    const paraFields = []
    const section = this.state[sectionName]
    for (const fieldName in this.state[sectionName]) {
      inputFields.push(
        <input
          type={section[fieldName].type}
          name={fieldName}
          section={sectionName}
          placeholder={section[fieldName].title}
          value={section[fieldName].text}
          onChange={handleChange}
          className='field'
        />
      )
      paraFields.push(
        <div key={uniqid()}>{section[fieldName].title}: {section[fieldName].text}</div>
      )
    }
    return (
      <div className='section-content'>
        <form className='forms'>
          {inputFields}
        </form>
        <Preview paraFields={paraFields} className='preview' />
      </div>
    )
  }
}

export default Section
