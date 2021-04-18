import React from 'react';
import Players from './components/Players';
import Navbar from './components/Navbar';
import Graph from './components/Graph';
import './App.css';

class App extends React.Component {
  state = {
    data: []
  }
  
  componentDidMount() {
    fetch(`https://arw-player-database.herokuapp.com/api/players`)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        this.setState({data: res})
    })
    .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Graph data={this.state.data}/>
        <Players data={this.state.data}/>
      </div>
    );
  }
}

export default App;
