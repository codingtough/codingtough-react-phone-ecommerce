import React from 'react'

export default function Title({ name, title }) {
   return (
      <div className="row">
         <div className="col-10 mx-auto my-3 text-center text-title mb-5">
            <h1 className="display-3 text-capitalize font-weight-bold">{name} <strong className="text-blue">{title}</strong></h1>
         </div>
      </div>
   )
}
