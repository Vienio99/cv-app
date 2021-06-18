import React from 'react'

class Field extends React.Component {
  render () {
    return (
      <input type={this.props.type} placeholder={this.props.title} className='field' />
    )
  }
}

export default Field
