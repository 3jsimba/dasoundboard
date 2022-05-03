# Da Soundboard

This web application is a simple soundboard that is composed of a bunch of random sounds, voice lines and clips. 

This project was made using React.js in combination with Howler.js

### How It Works
Since this application is using Howler.js, inside out react file we would like to import Howler.

```javascript
import { Howl } from 'howler'
```
more information on Howler.js will be on the Offical Howler.js webpage, informations page and documentation. 

[Howler.js](https://howlerjs.com/)


Once importing Howler inside out react app we are to make a variable for our sound. 
```javascript
const tacoBell = new Howl({
    src: ['tacobell.mp3']
});
```

After that you can apply a trigger for what will play the sound. In this example making the trigger a button once clicked, it will play the sound.

```javascript
<button onClick = {() => tacobell.play()}> taco bell </button>
```

This should be able to play the sound once the button is clicked. 

### Thank you!
A great thanks to all the open source software that can be used in making personal projects like this! This project wouldnt be possible with out them!
[Howler.js](https://howlerjs.com/)
[React.js](https://reactjs.org/)

-
-
-
