import React, { Component } from "react";
import Item from "./Item";
import SellerItem from "./SellerItem";
import NewItemForm from "./newItemForm";
import { Link } from "react-router-dom";
class Seller extends Component {

  render() {
  
    return (
      <div className="Seller">
        <div className="title">
          <h1>Seller Profile</h1>
        </div>
        <Link to="/">
          <button>Back Home</button>
        </Link>

        <div>
          
          <div className="seller-info">
            <h2>{this.props.sellerObj.name}</h2>
            <img src={this.props.sellerObj.profile_img} />
            <p>{this.props.sellerObj.description}</p>
            <p>Rating: {this.props.sellerObj.seller_rating}</p>
            <p>{this.props.sellerObj.email}</p>
          </div>
          <NewItemForm
            sellerObj={this.props.sellerObj}
            addItem={this.props.addItem}
          />
          <h3 className="my-items">My Items for sale</h3>
          
          <div className="items-container">
            {this.props.sellerObj.items.map((itemObj) => (
              <SellerItem
                key={itemObj.id}
                itemObj={itemObj}
                sellerObj={this.props.sellerObj}
                deleteItem={this.props.deleteItem}
              />
            ))}
            
          </div>
        </div>
      </div>
    );
  }
}
export default Seller;
