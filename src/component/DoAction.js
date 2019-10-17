import React from 'react'

class DoAction extends React.Component {
  done = (event) => {
    event.preventDefault()
    this.props
  }
  render() {
    return (
      <div className="do-action">
        <p>{this.props.action}</p>
        <button onClick={this.done}> DONE / REMOVE </button>
      </div>
    )
  }
}

export default DoAction