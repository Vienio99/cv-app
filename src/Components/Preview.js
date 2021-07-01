import React from 'react'

class Preview extends React.Component {
  render () {
    return (
      <div className='preview'>{this.props.paraFields}</div>
    )
  }
}

export default Preview
