import React, { Component } from 'react'

export default class Default extends Component {
   render() {
      console.log(this.props)
      return (
         <div className="container">
            <div className="row mt-5">
               <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                  <h1 className="display-1">404</h1>
                  <h2 className="display-1">error</h2>
                  <h2 className="display-1">page not found</h2>
                  <h3 className="display-4">
                     the requested URL{" "}
                     <span className="text-danger">
                        {this.props.location.pathname}
                     </span>{" "}
                     was not found
                  </h3>
               </div>
            </div>
         </div>
      )
   }
}
