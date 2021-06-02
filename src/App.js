import React from 'react';
import './App.css';

import Seller from './components/Seller'

class App extends React.Component{
  
  state = {
    sellersArr: []
  }

  componentDidMount(){
    fetch("http://localhost:9292/sellers")
    .then(res => res.json())
    .then((dbSellers) => {
      this.setState({
        sellersArr: dbSellers
      })
    })
  }

  render(){
    return(
      <div id="sellers-container"> 
        {this.state.sellersArr.map(sellerObj => <Seller key={sellerObj.id} sellerObj={sellerObj} />)}
      </div>
    );
  }
}

export default App;
