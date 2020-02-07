import React, { Component } from "react";
import API from "../utils/API";

class Products extends Component {
  state = {
    products: [
      {
        name: "Tester",
        type: "Beer",
        description:
          "Its beer what did you expect?",
        price: 12
      }
    ]
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

  render() {
    if (this.state.products.length){
      return(
        this.state.products.map(product => (
          <>
            <p>{product.name}</p>
            <p>{product.type}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </>
        ))
      )
    } else {
      return (
        <p>We're sorry there doesn't appear to be any items available at the moment.</p>
        );
    }

  };

}

export default Products;
