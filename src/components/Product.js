import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import PropTypes from 'prop-types'

export default class Product extends Component {
   render() {
      const { id, title, img, price, inCart } = this.props.product;

      return (
         <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
               <ProductConsumer>
                  {value => {
                     return (
                        <div
                           onClick={() => value.handleDetail(id)}
                           className="img-container p-5"
                        >
                           <Link to="/details">
                              <img src={img} alt={title} title={title} className="card-img-top" />
                           </Link>
                           <button
                              disabled={inCart ? true : false}
                              onClick={() => {
                                 value.addToCart(id);
                                 value.openModal(id);
                              }}
                              className="cart-btn"
                           >
                              {inCart ? (
                                 <p className="text-capitalize mb-0" disabled>in cart</p>
                              ) : (
                                    <i className="fas fa-cart-plus"></i>
                                 )}
                           </button>
                        </div>
                     );
                  }}
               </ProductConsumer>
               <div className="card-footer d-flex justify-content-between align-items-center">
                  <p className="align-self-center mb-0">
                     {title}
                  </p>
                  <h5 className="text-blue font-italic mb-0">
                     <span className="mr-1">$</span>
                     {price}
                  </h5>
               </div>
            </div>
         </ProductWrapper>
      )
   }
}

Product.propTypes = {
   product: PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      inCart: PropTypes.bool,
   }).isRequired
}

const ProductWrapper = styled.div`
   .card {
      border-color: transparent;
      transition: all 0.3s linear;
      cursor: pointer;
   }
   
   .card-footer {
      background: transparent;
      border-top: transparent;
      transition: all 0.3s linear;
   }
   
   &:hover {
      .card {
         border: 0.1rem solid rgba(0,0,0,0.2);
         box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
      }

      .card-footer {
         background: rgb(247,247,247);
      }
   }

   .img-container {
      position: relative;
      overflow: hidden;

      
      &:hover .card-img-top {
         transform: scale(1.2);
      }
   }

   .card-img-top {
      transition: all 350ms linear;
   }

   .cart-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0.3rem 0.9rem 0.3rem 0.6rem;
      border: none;
      background: var(--lightBlue);
      color: var(--mainWhite);
      font-size: 2.2rem;
      border-radius: 0.5rem 0 0 0;
      transform: translate(100%, 100%);
      transition: all 350ms linear;

      &:hover {
         color: var(--mainBlue);
      }
   }

   .img-container:hover .cart-btn {
      transform: translate(0,0);
   }

`