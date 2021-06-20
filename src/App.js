import Section from './Components/Section.js'

function App () {
  return (
    <div className='content'>
      <h1>Cv app</h1>
      <div className='personal-section'>
        <h2>Personal</h2>
        <Section sectionName='personal' />
      </div>
      <div className='experience-section'>
        <h2>Experience</h2>
        <Section sectionName='experience' />
      </div>
      <div className='education-section'>
        <h2>Education</h2>
        <Section sectionName='education' />
      </div>
    </div>
  )
}

export default App
