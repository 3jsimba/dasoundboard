import React from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import { Howl } from 'howler';
import soundData from './sounds.json';

const sounds = soundData.map(sound => {
  return {
    ...sound,
    sound: new Howl({
      src: [sound.src],
    }),
  };
});

function App(){

  return(
    <>
      <br></br>
      <div className="title">
        <h1>
          Da Soundboard
        </h1>
      </div>

      <br></br><br></br>

      <div className="container">
        <div className="row">
        
          <div className= "col">
            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>tag</Card.Title>
              <Card.Text>
              </Card.Text>

              <Button onClick={() => sounds[0].sound.play()} variant="dark">play</Button>

              </Card.Body>
            </Card> 
          </div>

          <div className= "col">
            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>taco bell</Card.Title>
              <Card.Text>
              </Card.Text>

              <Button onClick={() => sounds[1].sound.play()} variant="dark">play</Button>

              </Card.Body>
            </Card>
          </div>
          
          <div className= "col">
            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>AAUUGGHH</Card.Title>
              <Card.Text>
              </Card.Text>

              <Button onClick={() => sounds[2].sound.play()} variant="dark">play</Button>

              </Card.Body>
            </Card>
          </div>

        </div>
      </div>

      <footer className='footer'>
        <p className='footerText'> Verions 1.0.4 </p>
      </footer>
    </>
  );
}

export default App;