import React, { Component, cloneElement } from 'react'
import CartShoe from './CartShoe'
import ListShoe from './ListShoe'
import DetailShoe from './DetailShoe'
import { GIAM_SO_LUONG, TANG_SO_LUONG, shoeArr } from './data'

export default class Ex_Shoe extends Component {
    // khai báo state để truyền state vào hàm render
    state = {
        shoeArr: shoeArr,
        cart: [],
        detail: {},
    }
    handleAddToCart = (shoe) => {
        let cloneCart = this.state.cart;
        let index = cloneCart.findIndex((item) => {
            return item.id == shoe.id;
        })
        if (index == -1) {
            // sp chưa có
            // cú pháp es6 : clone và update rồi push vào
            let newShoe = { ...shoe, soLuong: 1 };
            cloneCart.push(newShoe);
        }
        else {
            // đã có sp
            cloneCart[index].soLuong++;
        }
        this.setState({
            cart: cloneCart,
        })
        // kiểm tra sp đã có trong giỏ hàng hay chua

        //th1 : sp chưa có trong giỏ hàng => tạo obj mới có thêm key soLuong:1 => push
        //th2 : sp đã có trong giả hàng =>update key soLuong lên 1 đơn vị
    }
    handleRemove = (idShoe) => {
        // splice
        let cloneCart = this.state.cart;
        let index = cloneCart.indexOf((item) => {
            return item.id === idShoe;
        })
        cloneCart.splice(index, 1);
        this.setState({
            cart: cloneCart,
        })

    }
    handleChangQuanTiTy_v2 = (idShoe, option) => {
        let cloneCart = this.state.cart;
        let index = cloneCart.findIndex((item) => {
            return item.id == idShoe;
        });
        if (option == TANG_SO_LUONG) {
            cloneCart[index].soLuong++;
        }
        else {
            cloneCart[index].soLuong--;
            cloneCart[index].soLuong == 0 && this.handleRemove(idShoe);
        }
        this.setState({
            cart: cloneCart,
        })
    }
    handleChangQuanTiTy = (idShoe, option) => {
        let cloneCart = this.state.cart;
        let index = cloneCart.findIndex((item) => {
            return item.id == idShoe;
        });
        option == TANG_SO_LUONG && cloneCart[index].soLuong++;
        option == GIAM_SO_LUONG && cloneCart[index].soLuong-- && cloneCart[index].soLuong == 0 && this.handleRemove(idShoe);
        this.setState({
            cart: cloneCart,
        })
    }
    handleDetail = (item) => { 
        
        this.setState({
            detail: item,
        })
        console.log(item);
     }
    render() {
        return (
            <div>
                <div class="row">
                    <CartShoe
                        handleChangQuanTiTy={this.handleChangQuanTiTy}
                        handleRemove={this.handleRemove}
                        cart={this.state.cart} />
                    {/* // truyền props shoeArr vào list // */}
                    <ListShoe list={this.state.shoeArr}
                        handleAddToCart={this.handleAddToCart}
                        handleDetail={this.handleDetail}
                        />
                </div>
                <DetailShoe
                handleDetail={this.handleDetail}
                detail = {this.state.detail} />
            </div>
        )
    }
}
// Ex_shoe : có 3 component
//
// 1: giỏ hàng ( cart )
// giỏ hàng là array

// 2: danh sách shoe (list)
// trong list có item
// item : 1 nút thêm vào giỏ hàng, 1 nút là xem chi tiết
// list shoe : render ra item

// 3: chi tiết shoe ( detail)
// detail là object