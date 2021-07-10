import React, { Component } from 'react'
import Form from './Form.js'
import Header from './Header.js'
import { jsPDF as JsPDF } from 'jspdf'
import fields from './fields.js'

class Sections extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sectionList: [
        { id: 0, name: 'personal', fields: fields.personal },
        { id: 1, name: 'experience', fields: fields.experience },
        { id: 2, name: 'education', fields: fields.education }
      ],
      sectionsCounter: 2
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.generatePdf = this.generatePdf.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleAdd (e, section) {
    e.preventDefault()
    function setStateFunction (state, props) {
      const count = state.sectionsCounter + 1
      const newState = { sectionList: [...state.sectionList, { id: count, name: section, fields: fields[section] }], sectionsCounter: count }
      return newState
    }
    this.setState(setStateFunction)
    console.log(this.state.sectionList[2])
  }

  handleDelete (e, key) {
    e.preventDefault()
    const newSectionList = this.state.sectionList.slice()
    newSectionList.splice(key, 1)
    this.setState({
      sectionList: this.state.sectionList.filter(section => section.id !== key)
    })
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
    this.setState({
      sectionList:
        [...this.state.sectionList,
          this.state.sectionList[id].fields[field].text: value
        ]
    })
    console.log(id)
    console.log(this.state.sectionList[id].fields[field].text)
  }

  render () {
    const { handleAdd, handleDelete, generatePdf, handleChange } = this
    const { sectionList } = this.state
    const experienceSections = []
    const educationSections = []
    for (const section of sectionList) {
      if (section.name === 'experience') {
        experienceSections.push(
          <div key={section.id}>
            <Form dataId={section.id} handleChange={handleChange} fields={fields.experience} />
            <button type='button' onClick={(e) => handleDelete(e, section.id)}>Delete</button>
          </div>
        )
      } else if (section.name === 'education') {
        educationSections.push(
          <div key={section.id}>
            <Form dataId={section.id} handleChange={handleChange} fields={fields.education} />
            <button type='button' onClick={(e) => handleDelete(e, section.id)}>Delete</button>
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
              <Form dataId='0' handleChange={handleChange} fields={fields.personal} />
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
