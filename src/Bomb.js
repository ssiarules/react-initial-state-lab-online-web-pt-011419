// your Bomb code here!
import React, {component} from 'react';

export default class Bomb extends React.Component{
  constructor(props){
    super();
    this.state = {
      secondsLeft: props.initialCount,
    }
  }


  render(){
    return(
      <div className="bomb">
        {(this.state.secondsLeft > 0) ? `${this.state.secondsLeft}seconds left before I go boom!` : 'Boom!' }

      </div>
    );
  }
}
