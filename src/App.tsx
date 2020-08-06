import React, {useState} from 'react';
import './App.css';
// import generateData from '../src/components/ImageAnimation/images/images';
// import Slider from '../src/components/ImageAnimation/mainImages';
import {Main} from 'components/ImageAnimation/images/main';

function App() {
  const [slide, setSlide] = useState(0);

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  function checkKey(e) {
    if (e.keyCode === 38) {
      setSlide(slide - 1);
    } else if (e.keyCode === 40) {
      setSlide(slide + 1);
    }
  }
  if (slide < 0) {
    setSlide(0);
  }
  return (
    <div role="button" tabIndex={0} className="App" onKeyDown={(e) => checkKey(e)}>
      <Main />
    </div>
  );
}

export default App;
