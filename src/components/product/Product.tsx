import React from 'react';
import productImg from '../../img/react.png';

export interface ProductProps {
  name: string,
  description: string,
  price: string
}

const Product = ({ name, description, price }: ProductProps) => (
  <div className="card">
    <img src={productImg} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
      <small className="text-muted">{price}</small>
      <div className="card-footer">
        <button type="button" className="btn btn-primary">Buy</button>
      </div>
    </div>
  </div>
);

export default Product;
