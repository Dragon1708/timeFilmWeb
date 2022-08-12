import React from "react";

import { useSelector,useDispatch } from "react-redux";

import searchIcon from "../Assets/icons/search-normal.svg";


import "./Cart.scss";
import {removeCartItem, plusCartItem, minusCartItem} from "../redux/actions/Cart";
import CardCart from "../Components/Cards/Cart/CardCart";

export default function Cart() {
const dispatch =useDispatch()

  const {items, totalPrice, totalCount}=useSelector(({CartReducer})=>CartReducer)
const ProductsInCard=Object.keys(items).map(key=>{
  return items[key].items[0]
})

const onRemoveItem=(ID)=>{
  dispatch(removeCartItem(ID))
}
const onPlusCartItem=(ID)=>{
  dispatch(plusCartItem(ID))
}
const onMinusCartItem=(ID)=>{
  dispatch(minusCartItem(ID))
}

  return (
    <div>
    <section className="Cart container">
      <h1 className="Cart__Title paragraph-text">
      <img src={searchIcon} alt="logo" />
      Cart
       </h1>
     {  totalCount ?
     <div>
       {ProductsInCard.map((obj) =>(
       // console.log(obj.creatorID)
        <CardCart data={obj} 
        totalPrice={items[obj.id].totalPrice}
        totalCount={items[obj.id].items.length}
        onRemove={onRemoveItem}
        onPlusItem={onPlusCartItem}
        onMinusItem={onMinusCartItem}
        />
       ))
       
       } </div>:
     <img src={"https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"} alt="logo" />
       
  }
     <div className="Cart__total">
<h2 className="data__title">Total  pictures:<span className="Cart__accent-text">{totalCount}</span> </h2>
<h2 className="data__title">Total  Price: <span className="Cart__accent-text">{totalPrice} USD</span> </h2>
     </div>
     <button className="product__buy-btn">
      Pay
     </button>
    </section>

  </div>
  );
}
