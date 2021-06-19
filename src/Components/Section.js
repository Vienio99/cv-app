import React from 'react'
import uniqid from 'uniqid'

class Section extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      personal: {
        isEdited: true,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },
      experience: {
        isEdited: true,
        position: '',
        company: '',
        location: '',
        startDate: '',
        endDate: ''
      },
      education: {
        isEdited: true,
        schoolName: '',
        subject: '',
        degree: '',
        location: '',
        startDate: '',
        endDate: ''
      }

    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    const section = this.props.sectionName
    console.log(section)
    this.state[section].isEdited ? this.setState({ [section]: { ...this.state[section], isEdited: false } }) : this.setState({ [section]: { ...this.state[section], isEdited: true } })
  }

  handleChange (e) {
    e.preventDefault()
    const value = e.target.value
    const section = e.target.name
    console.log('ok')
    this.setState({
      [section]: {
        ...this.state,
        [e.target.name]: value
      }
    })
  }

  render () {
    const { handleSubmit, handleChange } = this
    const { sectionName } = this.props
    const inputFields = []
    const paraFields = []
    console.log(this.state[sectionName])
    for (const fieldName in this.state[sectionName]) {
      if (fieldName === 'isEdited') {
      } else {
        if (this.state[sectionName].isEdited) {
          inputFields.push(<input
            type='text'
            name={fieldName}
            section={sectionName}
            placeholder={fieldName}
            value={this.state[sectionName][fieldName]}
            onChange={handleChange}
            className='field'
            key={uniqid()}
          />)
        } else {
          paraFields.push(
            <p key={uniqid()}>{fieldName}: {this.state[sectionName][fieldName]}</p>
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
