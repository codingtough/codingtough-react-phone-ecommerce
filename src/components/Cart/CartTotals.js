import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function CartTotals({ value }) {
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
                  <h2>
                     <span className="text-title">
                        subtotal:
                        <strong>${cartSubtotal}</strong>
                     </span>
                  </h2>
                  <h2>
                     <span className="text-title">
                        tax:
                        <strong>${cartTax}</strong>
                     </span>
                  </h2>
                  <h2>
                     <span className="text-title">
                        total:
                        <strong>${cartTotal}</strong>
                     </span>
                  </h2>
               </div>
            </div>
         </div>
      </Fragment>
   )
}
