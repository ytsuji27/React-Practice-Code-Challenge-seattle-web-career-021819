import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushis: [],
      balance: 100,
      eatenSushi: [],
      startIndex: 0
    }
  }

  // Starts fetch after render() is run.
  // Will re-render after the this.setState
  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      this.setState({
        sushis: data
      })
    })
  }

  // Called on sushi click from Sushi component
  eatSushi = sushi => {
    // Checks to see if you have enough money
    // If NOT, throw an error and end function
    if (this.state.balance < sushi.price){
      alert('Not enough money!');
      return;
    }
    // Updates 'eatenSushi' to include new sushi
    // and 'balance'
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      balance: this.state.balance - sushi.price
    })
  }

  // Called on more sushi button click from Sushi component
  moreSushi = () => {
    // Checking to see if startIndex is at the end (96)
    // since startIndex of 96 would be the last round of sushis (100 total)
    // After going through all 100, you want to restart the startIndex
    if (this.state.startIndex >= this.state.sushis.length - 4) {
      this.setState({ startIndex: 0 })
    } else {
      this.setState({ startIndex: this.state.startIndex + 4 })
    }
  }

  render() {
    // Destructuring to remove need to keep calling 'this.state'
    // i.e. you can just call 'sushis' instead of 'this.state.sushis'
    const {sushis, balance, eatenSushi, startIndex} = this.state

    return (
      <div className="app">
        <SushiContainer
          sushis={sushis.slice(startIndex, startIndex + 4)} // Only pass 4 sushis at a time
          eatSushi={this.eatSushi} // Callback function to be used in Sushi component
          eatenSushi={eatenSushi} // Used to check if sushi has already been eaten
          moreSushi={this.moreSushi} // Callback function to be used in Sushi component
        />
        <Table
          balance={balance} // Table needs to render balance remaining
          eatenSushi={eatenSushi} // Table needs to know how many plates and remaining balance
        />
      </div>
    );
  }
}

export default App;
