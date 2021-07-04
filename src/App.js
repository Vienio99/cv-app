import React, { Component } from 'react'
import Section from './Components/Section.js'
import Header from './Components/Header.js'

class App extends Component {
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
    const { handleAdd, handleDelete } = this
    const { sectionList } = this.state
    const elementsList = []
    for (let i = 0; i < sectionList.length; i++) {
      const section = sectionList[i]
      const upperCaseSection = section.charAt(0).toUpperCase() + section.slice(1)
      elementsList.push(
        <div className={section} key={i}>
          <h2>{upperCaseSection}</h2>
          <Section sectionName={section} />
          <button type='button' onClick={() => handleAdd(section)}>Add</button>
          <button type='button' onClick={() => handleDelete(i)}>Delete</button>
        </div>
      )
    }
    return (
      <div className='content'>
        <Header />
        <main>
          <div className='sections'>
            <div className='personal'>
              <h2>Personal</h2>
              <Section sectionName='personal' />
            </div>
            {elementsList}
          </div>
        </main>
      </div>
    )
  }
}

export default App
