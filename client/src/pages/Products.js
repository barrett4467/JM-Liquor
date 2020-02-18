import React, { Component } from "react";
import API from "../utils/API";

class Products extends Component {
  state = {
    products: [],
    name: "",
    type: "",
    description: "",
    price: 0
  };

  componentDidMount() {
    this.loadItems();
  };

  loadItems = () => {
    API.getItems()
    .then(res => 
      this.setState({ products: res.data })
      )
    .then(console.log(this.state))
      .catch(err => console.log(err)); 
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.price && this.state.type && this.state.description) {
      API.saveItem({
        name: this.state.name,
        type: this.state.type,
        description: this.state.description,
        price: this.state.price
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };

  render() {
    return(
      <>
        <form>
        <input
          value={this.state.name}
          onChange={this.handleInputChange}
          name="name"
          placeholder="Name (required)"
        />
        <input
          value={this.state.type}
          onChange={this.handleInputChange}
          name="type"
          placeholder="Type (required)"
        />
        <input
          value={this.state.description}
          onChange={this.handleInputChange}
          name="description"
          placeholder="Description (Required)"
        />
        <input
          value={this.state.price}
          onChange={this.handleInputChange}
          name="price"
          placeholder="Price (required)"
        />
        <button
          disabled={!(this.state.name && this.state.price && this.state.type && this.state.description)}
          onClick={this.handleFormSubmit}
        >
          Submit Book
        </button>
      </form>
        {this.state.products.length ? (
          this.state.products.map(product => (
            <>
              <p>{product.name}</p>
              <p>{product.type}</p>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </>
          ))
          ) : (
            <p>We're sorry there doesn't appear to be any items available at the moment.</p>
          )
        }
      </>
    )
  };

}

export default Products;
