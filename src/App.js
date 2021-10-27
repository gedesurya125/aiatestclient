import './App.css';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { getFlickrImagesAction } from './redux/actions/flickrImagesActions';

function App() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getFlickrImagesAction());
  }, [dispatch])
  return (
    <div className="App">
      HELLO WORLD
    </div>
  );
}

export default App;
