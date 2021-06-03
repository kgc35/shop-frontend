import React, { Component } from "react";
import Item from "./Item";
import SellerItem from "./SellerItem";
import NewItemForm from "./newItemForm";
import { Link } from "react-router-dom";
class Seller extends Component {
  render() {
    return (
      <div className="Seller">
        <Link to="/">
          <button>Back Home</button>
        </Link>

        <div>
          <h2>{this.props.sellerObj.name}</h2>
          <img src={this.props.sellerObj.profile_img} />
          <p>{this.props.sellerObj.description}</p>
          <p>Rating: {this.props.sellerObj.seller_rating}</p>
          <p>{this.props.sellerObj.email}</p>

          <div className="items-container">
            <h2>My Items for sale</h2>
            <NewItemForm
              sellerObj={this.props.sellerObj}
              addItem={this.props.addItem}
            />
            {this.props.sellerObj.items.map((itemObj) => (
              <SellerItem
                key={itemObj.id}
                itemObj={itemObj}
                sellerObj={this.props.sellerObj}
              />
            ))}
            )
          </div>
        </div>
      </div>
    );
  }
}
export default Seller;
