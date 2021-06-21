import React from 'react'
import Section from './Components/Section.js'

// function App () {

//   return (
//     <div className='content'>
//       <h1>Cv app</h1>
//       <div className='personal-section'>
//         <h2>Personal</h2>
//         <Section sectionName='personal' />
//       </div>
//       <div className='experience-section'>
//         <h2>Experience</h2>
//         <Section sectionName='experience' />
//         <button type='button' onClick={handleAdd}>Add</button>
//       </div>
//       <div className='education-section'>
//         <h2>Education</h2>
//         <Section sectionName='education' />
//         <button type='button'>Add</button>
//       </div>
//     </div>
//   )
// }

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      sectionList: ['experience', 'education']
    }

    this.handleAdd = this.handleAdd.bind(this)
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

  render () {
    const { handleAdd } = this
    const { sectionList } = this.state
    const elementsList = []
    for (let i = 0; i < sectionList.length; i++) {
      const section = sectionList[i]
      const upperCaseSection = section.charAt(0).toUpperCase() + section.slice(1)
      elementsList.push(
        <div className={section}>
          <h2>{upperCaseSection}</h2>
          <Section sectionName={section} />
          <button type='button' onClick={() => handleAdd(section)}>Add</button>
        </div>
      )
    }
    return (
      <div className='content'>
        <h1>Cv app</h1>
        <div className='personal-section'>
          <h2>Personal</h2>
          <Section sectionName='personal' />
        </div>
        {elementsList}
        {/* <div className='experience-section'>
          <h2>Experience</h2>
          <Section sectionName='experience' />
          <button type='button' onClick={() => handleAdd('experience')}>Add</button>
        </div>
        <div className='education-section'>
          <h2>Education</h2>
          <Section sectionName='education' />
          <button type='button' onClick={() => handleAdd('education')}>Add</button>
        </div> */}
      </div>
    )
  }
}

export default App
