import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Seller from "./components/Seller";
import ItemContainer from "./components/ItemContainer";

class App extends React.Component {
  state = {
    sellersArr: [],
    itemsArr: [],
    currentSeller: {},
  };

  componentDidMount() {
    fetch("http://localhost:9292/sellers")
      .then((res) => res.json())
      .then((dbSellers) => {
        fetch("http://localhost:9292/items")
          .then((res) => res.json())
          .then((dbItems) =>
            this.setState({
              sellersArr: dbSellers,
              itemsArr: dbItems,
            })
          );
      });
  }

  handleClickedSeller = (sellerObj, props) => {
    this.setState({ currentSeller: sellerObj });
    props.history.push("/seller");
  };

  render() {
    console.log(this.state.currentSeller);
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => (
                <ItemContainer
                  {...props}
                  sellersArr={this.state.sellersArr}
                  itemsArr={this.state.itemsArr}
                  handleClickedSeller={this.handleClickedSeller}
                />
              )}
            />
            <Route
              exact
              path="/seller"
              component={(props) => (
                <Seller {...props} sellerObj={this.state.currentSeller} />
              )}
            />
            ;
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
