import React from 'react';
import './App.css';
import { Howl } from 'howler';
import soundData from './sounds.json';
import Card from './components/Card.jsx';

const sounds = soundData.soundData.map(sound => {
  return {
    ...sound,
    sound: new Howl({
      src: [sound.src],
      volume: sound.volume,
      preload: true,
      autoplay: false,
      loop: false,
      onplay: () => {
        console.log('playing');
      } 
    })  
  } 
});

function App(){

  return(
    <>
      <div className="title">
        <h1>
          Da Soundboard
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <div className= "col">
            <Card title={soundData.soundData[0].name} howlClass={sounds[0]} />
          </div>
          <div className= "col">
            <Card title={soundData.soundData[1].name} howlClass={sounds[1]} />
          </div>
          <div className= "col">
            <Card title={soundData.soundData[2].name} howlClass={sounds[2]} />
          </div>
        </div>

        <br></br>

        <div className="row">
          <div className= "col">
            <Card title={soundData.soundData[3].name} howlClass={sounds[3]} />
          </div>
          <div className= "col">
            <Card title={soundData.soundData[4].name} howlClass={sounds[4]} />
          </div>
          <div className= "col">
            <Card title={soundData.soundData[5].name} howlClass={sounds[5]} />
          </div>
        </div>
        
        <br></br>

        <div className="row">
          <div className= "col">
            <Card title={soundData.soundData[6].name} howlClass={sounds[6]} />
          </div>
          <div className= "col">
            <Card title={soundData.soundData[7].name} howlClass={sounds[7]} />
          </div>
          <div className= "col">
            <Card title={soundData.soundData[8].name} howlClass={sounds[8]} />
          </div>
        </div>

        <br></br>

        <div className="row">
          <div className= "col">
            <Card title={soundData.soundData[9].name} howlClass={sounds[9]} />
          </div>
        </div>

      </div>

      <footer className='footer'>
        <p className='footerText'> Verions 1.0.5 </p>
      </footer>
    </>
  );
}

export default App;