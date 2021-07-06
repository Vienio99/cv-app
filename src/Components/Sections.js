import React, { Component } from 'react'
import Section from './Sections/Section.js'

class Sections extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sectionList: [{ id: 1, name: 'experience' }, { id: 2, name: 'education' }],
      sectionsCounter: 2
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleAdd (e, section) {
    e.preventDefault()
    function setStateFunction (state, props) {
      const count = state.sectionsCounter + 1
      const newState = { sectionList: [...state.sectionList, { id: count, name: section }], sectionsCounter: count }
      console.log(newState)
      return newState
    }
    this.setState(setStateFunction)
    // this.setState({
    //   sectionList: [...this.state.sectionList, { id: this.state.sectionsCounter, name: section }],
    //   ...this.state
    // })
    console.log(this.state)
  }

  handleDelete (e, key) {
    e.preventDefault()
    console.log(key)
    const newSectionList = this.state.sectionList.slice()
    newSectionList.splice(key, 1)
    console.log(newSectionList)
    this.setState({
      sectionList: newSectionList
    })
  }

  render () {
    const { handleAdd, handleDelete } = this
    const { sectionList } = this.state
    const experienceSections = []
    const educationSections = []
    for (const section of sectionList) {
      if (section.name === 'experience') {
        experienceSections.push(
          <div key={section.id}>
            <Section sectionName={section.name} />
            <button type='button' onClick={(e) => handleDelete(e, section.id)}>Delete</button>
          </div>
        )
      } else {
        educationSections.push(
          <div key={section.id}>
            <Section sectionName={section.name} />
            <button type='button' onClick={(e) => handleDelete(e, section.id)}>Delete</button>
          </div>
        )
      }
    }
    return (
      <div className='content'>
        <h1>Cv app</h1>
        <main>
          <div className='sections'>
            <div className='personal'>
              <h2>Personal</h2>
              <Section sectionName='personal' />
            </div>
            <div className='experience'>
              <h2>Experience</h2>
              {experienceSections}
              <button type='button' onClick={(e) => handleAdd(e, 'experience')}>Add</button>
            </div>
            <div className='education'>
              <h2>Education</h2>
              {educationSections}
              <button type='button' onClick={(e) => handleAdd(e, 'education')}>Add</button>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Sections
