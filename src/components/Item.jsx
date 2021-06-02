import React, { Component } from 'react';
class Item extends Component{

    render(){
        return(
            <div className="Item">
                <h2>{this.props.itemObj.name}</h2>
                <img src={this.props.itemObj.item_img} />
                <p>{this.props.itemObj.description}</p>
                <span>{this.props.itemObj.item_rating}</span>
                <span>{this.props.itemObj.price}</span>
                <span>{this.props.itemObj.qty}</span>
                
            </div>
        );
    }
}
export default Item;