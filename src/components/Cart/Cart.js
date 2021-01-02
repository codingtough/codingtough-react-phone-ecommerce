import React, { Component, Fragment } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
   render() {
      return (
         <section className="py-5">
            <ProductConsumer>
               {value => {
                  const { cart } = value;

                  if (cart.length) {

                     return (
                        <Fragment>
                           <Title name="your" title="cart" />
                           <CartColumns />
                           <CartList value={value} />
                           <CartTotals value={value} />
                        </Fragment>
                     );

                  } else {

                     return <EmptyCart />;

                  }
               }}
            </ProductConsumer>
         </section>
      )
   }
}