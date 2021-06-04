import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Item extends Component {
  render() {
    // console.log("test", this.props.seller[0]);
    return (
      <div className="item">
        <h2>{this.props.itemObj.name}</h2>
        <img src={this.props.itemObj.item_img} />
        <p>{this.props.itemObj.description}</p>
        <p>Rating: {this.props.itemObj.item_rating}</p>
        <p>Price: ${this.props.itemObj.price}</p>
        <p>Items in Stock: {this.props.itemObj.qty}</p>
        <p onClick={() => this.props.handleClickedSeller(this.props.seller[0])}>
          Sold by: {this.props.seller[0].name}
        </p>
      </div>
    );
  }
}
export default Item;
