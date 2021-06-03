import React, { Component } from "react";
class SellerItem extends Component {
  render() {
    // console.log(this.props.seller);
    return (
      <div id="Item" className="w3-card w3-pale-blue">
        <h2>{this.props.itemObj.name}</h2>
        <img src={this.props.itemObj.item_img} />
        <p>{this.props.itemObj.description}</p>
        <p>Rating: {this.props.itemObj.item_rating}</p>
        <p>Price: ${this.props.itemObj.price}</p>
        <p>Items in Stock: {this.props.itemObj.qty}</p>
      </div>
    );
  }
}
export default SellerItem;
