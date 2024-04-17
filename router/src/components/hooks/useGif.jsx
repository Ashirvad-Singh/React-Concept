import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';

const randomMemeUrl = "https://api.giphy.com/v1/gifs/random?api_key=cVonjTlsLNNhlFeZpdeNW7ecSRkJCqvl";

function useGif() {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    try {
      const url = tag ? `${randomMemeUrl}&tag=${tag}` : randomMemeUrl;
      const { data } = await axios.get(url);
      const imgSource = data.data.images.downsized_large.url;
      setGif(imgSource);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    gif,
    loading,
    fetchData
  };
}

export default useGif;
