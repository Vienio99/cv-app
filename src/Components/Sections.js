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
    function setStateFunction (state, props) {
      const newState = { ...state }
      delete newState[id]
      return newState
    }
    this.setState(setStateFunction)
    console.log(this.state)
  }

  generatePdf (e) {
    const doc = new JsPDF('p', 'pt')
    doc.text(20, 20, '--CV--')
    doc.setFont('helvetica')
    doc.text(20, 60, 'This is the content area.')
    doc.addPage() // this code creates new page in pdf document
    doc.setFont('helvetica')
    doc.text(20, 100, 'This is the second page.')
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
            <button type='button' onClick={(e) => handleDelete(e, this.state[section].id)}>Delete</button>
          </div>
        )
      } else if (this.state[section].name === 'education') {
        educationSections.push(
          <div key={this.state[section].id}>
            <Education dataId={this.state[section].id} handleChange={handleChange} fields={this.state[section].fields} />
            <button type='button' onClick={(e) => handleDelete(e, this.state[section].id)}>Delete</button>
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
              <button type='button' onClick={(e) => handleAdd(e, 'experience')}>Add</button>
            </div>
            <div className='education'>
              <h2>Education and training</h2>
              {educationSections}
              <button type='button' onClick={(e) => handleAdd(e, 'education')}>Add</button>
            </div>
          </div>
          <button type='button' onClick={(e) => generatePdf(e)}>Generate PDF</button><br />
        </main>
      </div>
    )
  }
}

export default Sections
