import React, { Component } from 'react'
import Section from './Sections/Section.js'

class Sections extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sectionList: ['experience', 'education']
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleAdd (section) {
    if (section === 'experience') {
      this.setState({
        sectionList: [section, ...this.state.sectionList]
      })
    } else {
      this.setState({
        sectionList: [...this.state.sectionList, section]
      })
    }
  }

  handleDelete (key) {
    const newSectionList = this.state.sectionList.slice()
    newSectionList.splice(key, 1)
    console.log(newSectionList)
    this.setState({
      sectionList: newSectionList
    })
  }

  render () {
    const { handleDelete } = this
    const { sectionList } = this.state
    const experienceSections = []
    const educationSections = []
    for (let i = 0; i < sectionList.length; i++) {
      const section = sectionList[i]
      if (section === 'experience') {
        experienceSections.push(
          <div key={i}>
            <Section sectionName={section} />
            <button type='button' onClick={() => handleDelete(section)}>Delete</button>
          </div>
        )
      } else {
        educationSections.push(
          <div key={i}>
            <Section sectionName={section} />
            <button type='button' onClick={() => handleDelete(section)}>Delete</button>
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
            </div>
            <div className='education'>
              <h2>Education</h2>
              {educationSections}
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Sections
