import React, { Component } from 'react'
import Personal from './Sections/Personal'

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
    return (
      <Personal />
    )
  }
}

export default Sections
