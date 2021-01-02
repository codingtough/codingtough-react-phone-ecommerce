import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PayPalButton from './PayPalButton'

export default function CartTotals({ value, history }) {
   const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
   return (
      <Fragment>
         <div className="container">
            <div className="row">
               <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitlize text-right">
                  <Link to="/">
                     <button
                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        type="button"
                        onClick={clearCart}
                     >
                        clear cart
                     </button>
                  </Link>
                  <h2 className="mt-4">
                     <span className="text-title">subtotal: </span>
                     <strong>$ {cartSubtotal}</strong>
                  </h2>
                  <h2>
                     <span className="text-title">tax: </span>
                     <strong>$ {cartTax}</strong>
                  </h2>
                  <h2 className="mb-5">
                     <span className="text-title">total: </span>
                     <strong>$ {cartTotal}</strong>
                  </h2>
                  <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
               </div>
            </div>
         </div>
      </Fragment>
   )
}
