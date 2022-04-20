import React, { Component } from 'react';
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

// make a const function that will hold multiple sounds with thier own names and folder paths
const sounds = {
  seori: {src: ['/sounds/producertag.mp3'], name: 'tag'},
  tacoBell: {src: ['/sounds/tacobell.webm'], name: 'tacobell'},
  AAUUGGHH: {src: ['/sounds/aughhhhh.webm'], name: 'aughhhhh'},
}



class App extends Component{
  playSound = (src) => {
    const sound = new Howl({
      src
    });
    sound.play();
  }
  
  returnButtonWithSound = () => {
    return sounds.map((soundSrc, index) => {
      return (
        <Button key={index} onClick={() => this.playSound(soundSrc.sound)} variant = "dark"> {soundSrc.name} </Button>
      )
    })
  }


  render () {
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
                <Card.Title>tag</Card.Title>
                <Card.Text>
                </Card.Text>

                {/* <Button onClick={() => seori.play()} variant="dark">play</Button> */}
                
                {/* <Button onClick={this.playSound(soundObj.src)} variant="dark">play</Button> */}

                {/* {this.returnButtonWithSound()} */}

                {this.returnButtonWithSound()}

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
          <p className='footerText'> Verions 1.0.2 </p>
        </footer>
      </>
    );
  }
}

export default App;