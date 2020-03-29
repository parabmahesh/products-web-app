import React, { Component } from 'react';
import Product from './Product';
import Loader from '../loader/Loader';

export interface ProductsProps { isLoading: boolean; products: any; }

class Products extends Component<ProductsProps, any> {
  constructor(props: ProductsProps) {
    super(props);
    this.state = {
      isLoading: true,
      products: [],
    };
  }

  componentDidMount() {
    return fetch('http://localhost:3003/api/products')
      .then((response) => response.json())
      .then((products) => {
        this.setState({
          products,
          isLoading: false,
        });
      });
  }

  render() {
    const { isLoading, products } = this.state;
    const listItems = products
      .map((product:any) => (
        <Product
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ));
    if (isLoading) {
      return (
        <Loader />
      );
    }
    return (
      <div className="card-deck">
        { listItems }
      </div>
    );
  }
}

export default Products;
