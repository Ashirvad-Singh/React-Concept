import React, { useState } from 'react';
import './App.css';
import Tours from './components/Tours';
import { data } from './data';

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(place_id) {
    const newTours = tours.filter(tour => tour.place_id !== place_id);
    setTours(newTours);
  }
if(tours.length===0){
  return (
  <div className='flex justify-center align-middle'>
    <div className="refresh">
      <h1>No Tours Left</h1>
<button className='px-4 py-2 bg-black text-white font-bold text-2xl' onClick={()=>setTours(data)}>Refresh</button>
    </div>
    </div>
  );
}
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
