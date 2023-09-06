import React, { Component } from 'react'
import ItemShoe from './ItemShoe';

export default class ListShoe extends Component {
    // đang ở class nên ko dùng let
    // render ra thì phải dùng arrow function
    // ở đây thì ta dùng props, mặc định là props
    // truyền vào 2 tham số là item và index
    // với index là key
    renderListShoe = () =>{
        return this.props.list.map((item, index) => { 
            return <ItemShoe 
            handleAddToCart={this
            .props.handleAddToCart}
            handleDetail={this.props.handleDetail}
            item={item} key={index} />
         });
    };
  render() {
    return (
        <div className='col-6 row'>
            {/* có dấu () vì muốn return ra giao diện phải có dấu () */}
        {this.renderListShoe()}
      </div>
    )
  }
}
