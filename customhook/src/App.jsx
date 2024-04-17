// App.js

import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='bg-white rounded-sm text-center text-black p-4 text-2xl mb-4'>Random GIF</h1>
      <div className='flex items-center gap-10'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
