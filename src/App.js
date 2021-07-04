import React, { Component } from 'react'
import Sections from './Components/Sections.js'
import Header from './Components/Header.js'

class App extends Component {
  render () {
    return (
      <div className='content'>
        <Header />
        <main>
          <div className='sections'>
            <div className='personal'>
              <h2>Personal</h2>
              <Sections />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App
