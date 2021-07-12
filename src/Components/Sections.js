import React, { Component } from 'react'
import Header from './Header.js'
import { jsPDF as JsPDF } from 'jspdf'
import fields from './fields.js'
import Personal from './Sections/Personal.js'
import Experience from './Sections/Experience.js'
import Education from './Sections/Education.js'

class Sections extends Component {
  constructor (props) {
    super(props)

    this.state = {
      0: { id: 0, name: 'personal', fields: fields.personal },
      1: { id: 1, name: 'experience', fields: fields.experience },
      2: { id: 2, name: 'education', fields: fields.education }
    }
    this.sectionsCounter = 2

    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.generatePdf = this.generatePdf.bind(this)
  }

  handleAdd (e, section) {
    e.preventDefault()
    const count = this.sectionsCounter + 1
    function setStateFunction (state, props) {
      const newState = { ...state, [count]: { id: count, name: section, fields: fields[section] } }
      this.sectionsCounter = count
      return newState
    }
    this.setState(setStateFunction)
  }

  handleDelete (e, id) {
    e.preventDefault()

    this.setState({ [id]: 'deleted' })
    console.log(this.state)
  }

  generatePdf (e) {
    const doc = new JsPDF('p', 'pt')
    doc.text(275, 50, '--CV--')
    doc.setFont('helvetica')

    doc.text(20, 100, 'Personal information')
    doc.text(20, 130, this.state[0].fields.firstName.text)
    doc.text(80, 130, this.state[0].fields.lastName.text)
    doc.text(20, 150, this.state[0].fields.phoneNumber.text)
    doc.text(20, 170, this.state[0].fields.email.text)

    doc.text(20, 210, 'Work experience')
    doc.text(20, 240, this.state[1].fields.position.text)
    doc.text(20, 260, this.state[1].fields.company.text)
    doc.text(20, 280, this.state[1].fields.location.text)
    doc.text(20, 300, this.state[1].fields.startDate.text)
    doc.text(120, 300, this.state[1].fields.endDate.text)

    doc.text(20, 340, 'Education')
    doc.text(20, 370, this.state[2].fields.schoolName.text)
    doc.text(20, 390, this.state[2].fields.subject.text)
    doc.text(20, 410, this.state[2].fields.degree.text)
    doc.text(20, 430, this.state[2].fields.location.text)
    doc.text(20, 450, this.state[2].fields.startDate.text)
    doc.text(120, 450, this.state[2].fields.endDate.text)
    doc.output('dataurlnewwindow')
  }

  handleChange (e, id) {
    e.preventDefault()
    const value = e.target.value
    const field = e.target.name
    console.log(this.state)
    this.setState({
      [id]: { ...this.state[id], fields: { ...this.state[id].fields, [field]: { ...this.state[id].fields[field], text: value } } }
    })
  }

  render () {
    const { handleAdd, handleDelete, generatePdf, handleChange } = this
    const experienceSections = []
    const educationSections = []
    for (const section in this.state) {
      if (this.state[section].name === 'experience') {
        experienceSections.push(
          <div key={this.state[section].id}>
            <Experience dataId={this.state[section].id} handleChange={handleChange} fields={this.state[section].fields} />
            <button type='button' className='delete-btn' onClick={(e) => handleDelete(e, this.state[section].id)}>Delete</button>
          </div>
        )
      } else if (this.state[section].name === 'education') {
        educationSections.push(
          <div key={this.state[section].id}>
            <Education dataId={this.state[section].id} handleChange={handleChange} fields={this.state[section].fields} />
            <button type='button' className='delete-btn' onClick={(e) => handleDelete(e, this.state[section].id)}>Delete</button>
          </div>
        )
      }
    }
    return (
      <div className='content'>
        <Header />
        <main>
          <div className='sections'>
            <div className='personal'>
              <h2>Personal information</h2>
              <Personal dataId='0' handleChange={handleChange} fields={this.state[0].fields} />
            </div>
            <div className='experience'>
              <h2>Work experience</h2>
              {experienceSections}
              <button type='button' className='add-btn' onClick={(e) => handleAdd(e, 'experience')}>Add</button>
            </div>
            <div className='education'>
              <h2>Education and training</h2>
              {educationSections}
              <button type='button' className='add-btn' onClick={(e) => handleAdd(e, 'education')}>Add</button>
            </div>
          </div>
          <button type='button' className='generate-btn' onClick={(e) => generatePdf(e)}>Generate PDF</button><br />
        </main>
      </div>
    )
  }
}

export default Sections
