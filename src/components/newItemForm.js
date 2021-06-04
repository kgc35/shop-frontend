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
    // console.log(this.state);
    return (
      <div>
        <form
          onChange={(e) => this.formChange(e)}
          onSubmit={(event) => this.props.addItem(event, this.state)}
        >
          <div className="inputs">
            <input type="text" name="name" placeholder="Name" id="left-input"/>
            <input type="text" name="item_img" placeholder="Item Image" />
            <input type="text" name="description" placeholder="Description" />
            <input type="number" name="price" placeholder="Price" />
            <input type="number" name="qty" placeholder="Quantity" />
            <input type="number" name="item_rating" placeholder="Item Rating" id="right-input"/>
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
