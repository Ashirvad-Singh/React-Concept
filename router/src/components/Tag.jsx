

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from './hooks/useGif';

function Tag() {
  const [tag, setTag] = useState('');
  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
const {gif,loading,fetchData}=useGif(tag)
  function changeHandler(event) {
    setTag(event.target.value);
  }

  function clickHandler() {
    if (tag.trim() !== '') {
      setError('');
      fetchData();
    } else {
      setError('Please enter a tag.');
    }
  }

  return (
    <div className='flex justify-center items-center  bg-gradient-to-br from-blue-400 to-green-600'>
      <div className='bg-blue-900 flex flex-col justify-center align-center p-5'>
        <h1 className='text-3xl font-bold text-blue-500 text-center mb-4'>Random GIF Generator</h1>
        <div className='relative mb-4'>
          <input
            className='w-full text-lg py-2 rounded-lg pl-4 pr-12 focus:outline-none focus:ring focus:border-blue-300'
            placeholder='Enter a tag...'
            onChange={changeHandler}
            value={tag}
          />
          <button
            onClick={()=>fetchData()}
            className='absolute inset-y-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
          >
            Generate
          </button>
        </div>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        {loading ? (
          <div className='flex justify-center'>
            <Spinner />
          </div>
        ) : (
          <div className={gif ? 'block' : 'hidden'}>
            <img src={gif} alt='random gif' className='w-full rounded-lg shadow' />
          </div>
        )}
      </div>
    </div>
  );
}

export default Tag;