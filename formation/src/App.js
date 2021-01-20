import React, { Component } from 'react'
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    name: 'Alexandre',
    age: 32,
    vieillir: 5
  }, 
  membre2: {
    name: 'Caroline', 
    age : 30
  },
  membre3: {
    name: 'Louane',
    age: 2
  },
  membre4: {
    name: 'Lucky',
    age: 5
  }
}

class App extends Component {
  state = {
    famille
  }

  handleClick = num => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }
  handleChange = event => {
    const famille = { ...this.state.famille }
    const name = event.target.value
    famille.membre1.name = name
    this.setState({ famille })
  }
  
  handleChange2 = event => {
    const famille = { ...this.state.famille }
    const name = event.target.value
    famille.membre2.name = name
    this.setState({ famille })
  }

  render () {
    const { titre } = this.props
    const { famille } = this.state
    return (
      <div className="App">
        <h1>{ titre }</h1>
        Membre1 : 
        <input value={famille.membre1.name} onChange={this.handleChange} type='text' />
        <Membre 
          age={famille.membre1.age}
          name={famille.membre1.name}/>
        Membre2 : 
        <input value={famille.membre2.name} onChange={this.handleChange2} type='text' />
        <Membre 
          age={famille.membre2.age}
          name={famille.membre2.name}/>
        <Membre 
          age={famille.membre3.age}
          name={famille.membre3.name}/>
        <Membre 
          age={famille.membre4.age}
          name={famille.membre4.name}>
          <strong>Je suis un chien.</strong>
        </Membre>
        <Button
          vieillir={() =>this.handleClick(famille.membre1.vieillir)} combien={famille.membre1.vieillir}/>
      </div>
    )
  }
}

export default App;
