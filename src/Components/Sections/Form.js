import React, { Component } from 'react'

class Form extends Component {
  render () {
    const inputFields = []
    const { fields } = this.props
    for (const field in fields) {
      if (field !== 'isEdited') {
        inputFields.push(
          <input
            type={fields[field].type}
            name={field}
            section='personal'
            placeholder={fields[field].title}
            value={fields[field].text}
            onChange={this.props.handleChange}
            className='field'
            key={fields[field].key}
          />
        )
      }
    }
    return (
      <div>
        {inputFields}
      </div>
    )
  }
}

export default Form
