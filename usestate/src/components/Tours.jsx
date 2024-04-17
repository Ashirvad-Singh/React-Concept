import React from 'react';
import Card from './Card';

function Tours({ tours,removeTour }) {
  return (
    <div>
      <div className='container flex justify-center text-center'>
      <h2 className='title text-3xl font-bold p-4 m-6 rounded-lg text-black text-center border-dashed border-4 border-[#000000]'>Plan with Saksham</h2>

      </div>
      <div className='flex flex-wrap gap-8  align-items-center justify-center'>
        {tours.map((tour, index) => (
          <Card key={index} {...tour} removeTour={removeTour}/>
        ))}
      </div>
    </div>
  );
}


export default Tours