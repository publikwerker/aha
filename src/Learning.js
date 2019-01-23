import React from 'react';
import './Learning.css';
import Confusion from './NewInformation';
import Understanding from './DiligentStudy';

export default class BetterLife extends React.Component {
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
        <div className="Study">
          <Confusion 
          onClick={() => {this.bringUnderstanding()}}/>
        </div>
      );
    } else if (this.state.mentalState==='Understanding'){
      return (
        <div className="Study">
          <Understanding />
        </div>
      );
    }

  }
  
}
