import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Seller from "./components/Seller";
import ItemContainer from "./components/ItemContainer";
import { withRouter, Redirect } from "react-router-dom";

class App extends React.Component {
  state = {
    sellersArr: [],
    itemsArr: [],
    currentSeller: {},
    currentSeller_index: [],
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

  handleClickedSeller = (sellerObj) => {
    let currentSeller_index = this.state.sellersArr.indexOf(sellerObj);
    this.setState({
      currentSeller: sellerObj,
      currentSeller_index: currentSeller_index,
    });
    this.props.history.push("/seller");
    // return <Redirect to="/seller" />;
  };

  addItem = (event, newItem) => {
    event.preventDefault();

    fetch("http://localhost:9292/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((resp) => resp.json())
      .then((newItemData) => {
        fetch("http://localhost:9292/sellers")
          .then((res) => res.json())
          .then((dbSellers) => {
            this.setState({
              itemsArr: [...this.state.itemsArr, newItemData],
              sellersArr: [dbSellers],
              currentSeller: dbSellers[this.state.currentSeller_index],
            });
          });
      });
  };

  deleteItem = (event, id) => {
    event.preventDefault();
    fetch(`http://localhost:9292/items/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((deletedItemData) => {
        fetch("http://localhost:9292/sellers")
          .then((res) => res.json())
          .then((dbSellers) => {
            
            this.setState({
              itemsArr: this.state.itemsArr.filter(
                (item) => item !== deletedItemData
              ),
              sellersArr: [dbSellers],
              currentSeller: dbSellers[this.state.currentSeller_index],
            });
          });
      });
  };

  render() {
    // console.log(this.state.sellersArr.indexOf(this.state.currentSeller)); //Why doesn't this work?
    console.log(this.state.currentSeller_index);
    return (
      // <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/seller"
            component={(props) => (
              <Seller
                {...props}
                sellerObj={this.state.currentSeller}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
              />
            )}
          />
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
        </Switch>
      </div>
      // </Router>
    );
  }
}

export default withRouter(App);
