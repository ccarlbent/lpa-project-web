import React from 'react';

function Card() {
  return (
    <div>
      <div className="card" style="width: 18rem;">
        {
          data.map((data) => (
            <div key={data.id}>
            <img src={data.img} className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <h2 className="card-price">{data.price}</h2>
              <p className="card-text">This plant is the number 1 best selling for indoor plants</p>
              <button href="#" className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default Card;
