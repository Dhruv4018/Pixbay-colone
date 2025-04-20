import React, { useEffect, useState } from 'react';
import PixabayContext from './PixabayContext';

const PixabayState = (props) => {
  const [Image, setImage] = useState([]);
  const [ImageSearch , setImageSearch] = useState("london")
  const api_key = "41325029-dba433b19c8cac3fe2e6ea8b0";

  useEffect(() => {
    const fetchImages = async () => {
      const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${ImageSearch}&image_type=photo&pretty=true&per_page=100`);
      const data = await api.json();
      setImage(data.hits);
    };
    fetchImages();
  }, [ImageSearch]); // ✅ run only once on mount

  const ImageCatagory = async (cat) => {
    const catagory = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${cat}&image_type=photo`);
    const data = await catagory.json();
    setImage(data.hits);
  };

  return (
    <PixabayContext.Provider value={{ Image, ImageCatagory , setImageSearch }}>
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
