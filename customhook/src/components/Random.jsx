import React from 'react';
import useGif from './hooks/useGif';
import Spinner from './Spinner';

function Random() {
  const { gif, loading, fetchData } = useGif(); // Invoke the useGif hook

  function clickHandler() {
    fetchData(); // Call fetchData function from the hook
  }

  return (
    <div className='flex justify-center items-center  bg-gradient-to-br from-blue-400 to-green-600'>
    <div className='bg-blue-900 flex flex-col justify-center align-center p-5'>
    <h1 className='text-3xl font-bold text-blue-500 text-center mb-4'>Random GIF Generator</h1>
      {loading ? <Spinner /> : <img src={gif} alt='random gif' className='w-full rounded-lg shadow' />}
      <button onClick={clickHandler} className='w-96 align-center bg-blue-400 text-white p-4 text-2xl text-center mt-6 border border-solid rounded-lg'>Generate</button>
    </div>
    </div>
  );
}

export default Random;
