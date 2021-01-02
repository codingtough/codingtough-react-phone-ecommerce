import React from 'react'

export default function CartItem({ item, value }) {
   const { id, img, price, title, total, count } = item;
   const { increment, decrement, removeItem } = value;

   return (
      <div className="row my-5 text-capitalize text-center d-flex align-items-center justify-content-center">
         <div className="col-10 mx-auto col-lg-2">
            <img
               src={img}
               alt={title}
               title={title}
               style={{ width: '8rem', height: '8rem' }}
               className="img-fluid"
            />
         </div>
         <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">product: </span>
            {title}
         </div>
         <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">price: </span>
            <strong>$</strong>{price}
         </div>
         <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
               <div>
                  <span className="btn btn-black mx-1 px-3" onClick={() => decrement(id)}>-</span>
                  <span className="btn btn-black mx-1 px-3">{count}</span>
                  <span className="btn btn-black mx-1 px-3" onClick={() => increment(id)}>+</span>
               </div>
            </div>
         </div>
         <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon" onClick={() => removeItem(id)}>
               <i className="fas fa-trash"></i>
            </div>
         </div>
         <div className="col-10 mx-auto col-lg-2">
            <strong>item total: ${total}</strong>
         </div>
      </div>
   )
}