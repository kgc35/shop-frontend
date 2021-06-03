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
    this.setState({ currentSeller: sellerObj });
    this.props.history.push("/seller");
    // return <Redirect to="/seller" />;
  };

  addItem = (event, newItem, updt) => {
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
            });
            updt();
          });
      });
  };

  // deleteItem = (event) => {
  //   event.preventDefault();
  //   fetch(`http://localhost:9292/items/${event.id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newItem),
  //   })
  //     .then((resp) => resp.json())
  //     .then((newItemData) => {
  //       fetch("http://localhost:9292/sellers")
  //         .then((res) => res.json())
  //         .then((dbSellers) => {
  //           this.setState({
  //             itemsArr: [...this.state.transactionsArr, newItemData],
  //             sellersArr: [dbSellers],
  //           });
  //         });
  //     });
  // };

  render() {
    // console.log(this.state.currentSeller);
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
                key={this.state.currentSeller.id}
                sellerObj={this.state.currentSeller}
                addItem={this.addItem}
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
