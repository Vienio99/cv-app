import React, { Component } from 'react'

class Submitted extends Component {
  render () {
    const submittedFields = []
    const { fields } = this.props
    for (const field in fields) {
      if (field !== 'isEdited') {
        submittedFields.push(
          <p key=''>{fields[field].title}: {fields[field].text}</p>
        )
      }
    }

    return (
      <div>
        {submittedFields}
      </div>
    )
  }
}

export default Submitted
