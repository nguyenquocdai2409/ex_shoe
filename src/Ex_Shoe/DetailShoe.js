import React, { Component } from 'react'
import { shoeArr } from './data';

export default class DetailShoe extends Component {
  render() {
    let { image, name, price, description, quantity } = this.props.detail;
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" style={{with:"10px"}} src={image} alt />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
            <p className="card-text">{description}</p>
            <p className="card-text">{quantity}</p>
          </div>
        </div>
      </div>
    )
  }
}