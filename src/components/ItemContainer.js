import React, { Component } from "react";
import Item from "./Item";

class ItemContainer extends Component {
  render() {
    return (
      <div id="items">
        {this.props.itemsArr.length > 0 &&
          this.props.itemsArr.map((itemObj) => (
            <Item
              props={this.props}
              key={itemObj.id}
              itemObj={itemObj}
              seller={this.props.sellersArr.filter(
                (seller) => seller.id === itemObj.seller_id
              )}
              handleClickedSeller={this.props.handleClickedSeller}
            />
          ))}
      </div>
    );
  }
}
export default ItemContainer;
