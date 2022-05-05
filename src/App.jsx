import React from 'react';
import './App.css';
// import { Card, Button } from 'react-bootstrap';
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


      {/* <div className="container">
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

        <br></br>
        
        <div className="row">
        
          <div className= "col">

            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>bruh</Card.Title>
              <Card.Text>
              </Card.Text>

              <Button onClick={() => sounds[3].sound.play()} variant="dark">play</Button>

              </Card.Body>
            </Card> 
            
          </div>

          <div className= "col">
            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>andoird</Card.Title>
              <Card.Text>
              </Card.Text>

              <Button onClick={() => sounds[4].sound.play()} variant="dark">play</Button>

              </Card.Body>
            </Card>
          </div>
          
          <div className= "col">
            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>fart</Card.Title>
              <Card.Text>
              </Card.Text>

              <Button onClick={() => sounds[5].sound.play()} variant="dark">play</Button>

              </Card.Body>
            </Card>
          </div>

        </div>
        
        <br></br>
        
        <div className="row">
        
          <div className= "col">

            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>reverbed fart</Card.Title>
              <Card.Text>
              </Card.Text>

              <Button onClick={() => sounds[6].sound.play()} variant="dark">play</Button>

              </Card.Body>
            </Card> 
            
          </div>

          <div className= "col">
            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>grubbin</Card.Title>
              <Card.Text>
              </Card.Text>

              <Button onClick={() => sounds[7].sound.play()} variant="dark">play</Button>

              </Card.Body>
            </Card>
          </div>
          
          <div className= "col">
            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>throat goat</Card.Title>
              <Card.Text>
              </Card.Text>

              <Button onClick={() => sounds[8].sound.play()} variant="dark">play</Button>

              </Card.Body>
            </Card>
          </div>

        </div>
        
        <br></br>

        <div className="row">
        
          <div className= "col">

            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>vine</Card.Title>
              <Card.Text>
              </Card.Text>

              <Button onClick={() => sounds[9].sound.play()} variant="dark">play</Button>

              </Card.Body>
            </Card> 
            
          </div>
        
        </div>
      </div> */}

      <div className="container">
        <div className="row">
          <div className= "col">
            <Card title="tag" howlClass={sounds[0].sound.play()} />
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