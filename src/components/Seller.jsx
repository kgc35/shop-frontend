import React, { Component } from 'react';
import Item from './Item'
class Seller extends Component{

    render(){
        return(
            <div className="Seller">
                <h2>{this.props.sellerObj.name}</h2>
                <img src={this.props.sellerObj.profile_img} />
                <p>{this.props.sellerObj.description}</p>
                <span>{this.props.sellerObj.seller_rating}</span>
                <p>{this.props.sellerObj.email}</p>
                <div className="items-container">
                    <h2>My Items for sale</h2>
                    {this.props.sellerObj.items.map(itemObj => <Item key={itemObj.id} itemObj={itemObj} />)}
                </div>
            </div>
        );
    }
}
export default Seller;