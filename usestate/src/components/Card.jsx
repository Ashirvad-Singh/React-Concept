import React, { useState } from 'react';

function Cards({ place_id, place_name, place_info, place_img_link, place_price, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? place_info : `${place_info.substring(0, 100)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className='card w-[25%] border-blue-500 bg-blue-900 rounded-lg border-8 p-3  text-white text-center'>
      <img className=" rounded-lg border-" src={place_img_link} alt="" />
      <div className='tours-details'>
        <h4 className='tour-price text-3xl font-bold'>{place_price}</h4>
        <h4 className='tour-name text-2xl font-bold'>{place_name}</h4>
      </div>
      <div className="description font-bold">
        {description}
        <span className='read-more text-yellow-900' onClick={readmoreHandler}>
          {readmore ? `show less` : `read more`}
        </span>
      </div>
      <button className="btn-red bg-red-500 px-4 py-3 border-white-200 rounded-lg text-lg font-bold text-center mt-2" onClick={() => removeTour(place_id)}>Not Interested</button>
    </div>
  );
}

export default Cards;
