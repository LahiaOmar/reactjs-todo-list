import React from 'react'

class Action extends React.Component {
  inpMsg = React.createRef()

  handleAdd = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(this.inpMsg.current.value)
    this.props.addActions(this.inpMsg.current.value)
    this.inpMsg.current.value = ""
  }

  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <input type="text" ref={this.inpMsg}></input>
        <button onClick={this.handleAdd}>ADD THIS ACTION </button>
      </form>
    )
  }
}

export default Action