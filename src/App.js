import React from 'react';
import './App.css';
import Confusion from './NewInformation';
import Understanding from './DiligentStudy';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state =
      {
        mentalState: 'Confusion'
      }
  }

  bringUnderstanding() {
    this.setState({
      mentalState: 'Understanding'
    });
  }

  render() {

    if 
    (this.state.mentalState==='Confusion'){
      return (
        <div className="App">
          <Confusion 
          onClick={() => {this.bringUnderstanding()}}/>
        </div>
      );
    } else if (this.state.mentalState==='Understanding'){
      return (
        <div className="App">
          <Understanding />
        </div>
      );
    }

  }
  
}
