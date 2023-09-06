import React, { Component } from 'react'

export default class ItemShoe extends Component {
    render() {
        let { image, name } = this.props.item;
        return (
            <div>
                <div className="card text-left col-3">
                <img className="card-img-top " src={image} alt />
                <div className="card-body p-0">
                    <small className="card-title">{name}</small>
                    <p className="card-text">
                        <button
                        onClick={() => { 
                            this.props.handleAddToCart(this.props.item)
                         }}
                         className='btn btn-primary mr-2'>Add</button>
                        <button
                        onClick={() => { 
                            this.props.handleDetail(this.props.item)
                         }}
                        className='btn btn-success'>View</button>
                    </p>
                </div>
            </div>
            </div>
        )
    }
}
// binding item shoe