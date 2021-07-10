import React, { Component } from 'react'

class Form extends Component {
  render () {
    const inputFields = []
    const { fields, handleChange, dataId } = this.props
    for (const field in fields) {
      inputFields.push(
        <input
          type={fields[field].type}
          name={field}
          placeholder={fields[field].title}
          value={fields[field].text}
          onChange={(e) => handleChange(e, dataId)}
          className='field'
          key={fields[field].key}
          required
        />
      )
    }
    return (
      <div className='inputFields'>
        <form className='forms' data-id={dataId}>
          {inputFields}
        </form>
      </div>
    )
  }
}

export default Form
