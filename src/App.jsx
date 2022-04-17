import React, { useState } from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import { Howl, Howler } from 'howler';

function App(){
  const seori = new Howl({
    src: ['./src/components/sounds/producertag.mp3']
  });

  RenderButtonAndSound = () => {
    return audioClips.map((soundObj, index) => {
      return(
        <Button key={index} onClick={() => this.playSound(soundObj.sound)}>

        </Button>
      )
    })

  }
  
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
              <Card.Title>bruh</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="dark">play</Button>
              </Card.Body>
            </Card>
          </div>
          
          <div className= "col">
            <Card border='white' className='card' style={{ width: '10rem' }}>
              <Card.Body>
              <Card.Title>AAUUGGHH</Card.Title>
              <Card.Text>
              </Card.Text>
              <Button variant="dark">play</Button>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
