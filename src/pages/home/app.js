import React from 'react';
import Banner from './banner';
import './app.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount() { 
    
  }
  render() {
    return (
      <div>
        <Banner></Banner>
        <div className="rem"></div>
      </div>
    )
  }
}

export default App;

