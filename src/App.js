import Personal from './Components/Personal.js'
import Experience from './Components/Experience.js'
import Education from './Components/Education.js'
import Section from './Components/Section.js'

function App () {
  return (
    <div className='content'>
      <div className='personal-section'>
        <h1>Cv app</h1>
        <Personal />
      </div>
      <div className='experience-section'>
        <h2>Experience</h2>
        <Experience />
      </div>
      <div className='education-section'>
        <h2>Education</h2>
        <Education />
      </div>
      <div>
        <h2>Test section</h2>
        <Section sectionName='personal' />
      </div>
      <div>
        <h2>Test section 2</h2>
        <Section sectionName='experience' />
      </div>
    </div>
  )
}

export default App
