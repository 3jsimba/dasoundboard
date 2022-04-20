import React from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import { Howl } from 'howler';

const seori = new Howl({
  src: ['/sounds/producertag.mp3'],
});

const tacoBell = new Howl({
  src: ['/sounds/tacobell.webm'],
});

const AAUUGGHH = new Howl({
  src: ['/sounds/aughhhhh.webm'],
});


function App(){
  return (
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
              <Card.Title>seori</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button onClick={() => seori.play()} variant="dark">play</Button>
              </Card.Body>
            </Card> 
          </div>

          <div className= "col">
            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>taco bell</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button onClick={() => tacoBell.play()} variant="dark">play</Button>
              </Card.Body>
            </Card>
          </div>
          
          <div className= "col">
            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>AAUUGGHH</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button onClick={() => AAUUGGHH.play()} variant="dark">play</Button>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>

      <footer className='footer'>
        <p className='footerText'> Verions 1.0.1 </p>
      </footer>
    </>
  );
}

export default App;
