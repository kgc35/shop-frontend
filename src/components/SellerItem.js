import React, { Component } from "react";
class SellerItem extends Component {
 
  render() {
    // console.log(this.props.seller);
    return (
      <div className="item">
        <h2>{this.props.itemObj.name}</h2>
        <img src={this.props.itemObj.item_img} />
        <p>{this.props.itemObj.description}</p>
        <p>Rating: {this.props.itemObj.item_rating}</p>
        <p>Price: ${this.props.itemObj.price}</p>
        <p>Items in Stock: {this.props.itemObj.qty}</p>
        <button onClick={(event) => this.props.deleteItem(event, this.props.itemObj.id)}>Delete Item</button>
      </div>
    );
  }
}
export default SellerItem;
