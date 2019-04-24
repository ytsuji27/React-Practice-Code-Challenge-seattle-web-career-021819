import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      sushis: [],
      startIndex: 0,
      purchasedSushi: [],
      balance: 100
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData(){
    fetch(API)
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data);
      this.setState({
        sushis: data
      })
    })
  }

  eatSushi =(sushi) => {
    if (this.state.balance < sushi.price){
      alert('Broke mf!')
      return
    }
    this.setState({
      purchasedSushi: [...this.state.purchasedSushi,sushi],
      balance: this.state.balance - sushi.price
    })
  }

  moreSushi = () => {
    if (this.state.startIndex >= this.state.sushis.length-4) {
      this.setState({
        startIndex: 0
      })
    } else {
      this.setState({
        startIndex: this.state.startIndex+4
      })
    }
  }

  render() {
    const {sushis, startIndex, purchasedSushi, balance} = this.state

    return (
      <div className="app">
        <SushiContainer sushis={sushis.slice(startIndex,startIndex+4)} purchasedSushi={purchasedSushi} eatSushi={this.eatSushi} moreSushi={this.moreSushi}  />
        <Table balance={balance} purchasedSushi={purchasedSushi} />
      </div>
    );
  }
}

export default App;
