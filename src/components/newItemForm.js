import React, { Component } from "react";

class NewItemForm extends Component {
  state = {
    item_img: "",
    description: "",
    price: "",
    qty: "",
    item_rating: "",
    seller_id: this.props.sellerObj.id,
  };

  formChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form
          onChange={(e) => this.formChange(e)}
          onSubmit={(event) => this.props.addTransaction(event, this.state)}
        >
          <div>
            <input type="text" name="item_img" placeholder="Item Image" />
            <input type="text" name="description" placeholder="Description" />
            <input type="number" name="price" placeholder="Price" step="0.01" />
            <input
              type="number"
              name="qty"
              placeholder="Quantity"
              step="0.01"
            />
            <input
              type="number"
              name="item_rating"
              placeholder="Item Rating"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default NewItemForm;
