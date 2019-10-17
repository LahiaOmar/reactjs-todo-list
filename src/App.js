import React from 'react';
import Action from './component/Action'
import './App.css';
import DoAction from './component/DoAction'

class App extends React.Component {
  state = {
    actions: []
  }

  addActions = (act) => {
    console.log("action add ", act)

    const actions = [...this.state.actions]

    actions.push(act)

    this.setState({ actions })

    console.log("new state : ", this.state)

  }

  render() {
    return (
      <div className="App" >
        <p>TODO LIST</p>
        {this.state.actions.map(key => <DoAction key={key} action={key} />)}
        <Action addActions={this.addActions} />
      </div>
    )
  }

}

export default App;
