import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends Component {
   render() {
      return (
         <ProductConsumer>
            {(value) => {
               const { id, company, img, info, price, title, inCart } = value.detailProduct;
               return (
                  <div className="container py-5">
                     {/* title */}
                     <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-3">
                           <h1 className="display-1">{title}</h1>
                        </div>
                     </div>
                     {/* end title */}
                     {/* product info */}
                     <div className="row">
                        {/* product img */}
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                           <img src={img} alt={title} title={title} className="img-fluid" />
                        </div>
                        {/* product text */}
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                           <h2 className="display-3">model: {title}</h2>
                           <h3 className="text-title text-uppercase text-muted mt-3 mb-2">
                              made by: <span className="text-uppercase">{company}</span>
                           </h3>
                           <h3 className="display-4 text-blue">
                              <strong>price: <span>$</span>{price}</strong>
                           </h3>
                           <p className="text-capitalize font-weight-bold mt-5 mb-2">
                              some info about product:
                           </p>
                           <p className="text-muted lead">{info}</p>
                           {/* buttons */}
                           <div>
                              <Link to="/">
                                 <ButtonContainer>back to products</ButtonContainer>
                              </Link>
                              <ButtonContainer
                                 cart
                                 disabled={inCart ? true : false}
                                 onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id);
                                 }}
                              >
                                 {inCart ? "inCart" : "add to cart"}
                              </ButtonContainer>
                           </div>
                        </div>
                     </div>
                     {/* end product info */}
                  </div>
               );
            }}
         </ProductConsumer>
      )
   }
}
