# captioner
Creates dynamic captions based on speech recognition.

## dependencies
- Node.js
- NPM
- p5.Speech.js
# requirements
A microphone and internet connection are required, as this is a cloud based process.

# execution

A call to recognizer.js from the index instantiates, a p5.Speech API interaction.

```js
function setup() {
    noCanvas();
    let recording = new p5.SpeechRec();
    recording.onResult = showResult;

    let continuous = true;
    let iterim = true;
  
    recording.start(continuous, iterim);
    
    function showResult() {
        if (recording.resultString) {
          document.getElementById('caption').innerText = recording.resultString;
        }
    }
}
```

See: http://ability.nyu.edu/p5.js-speech/ for documentation.

# usage

```bash
git clone https://github.com/mjrdnk/captioner.git
cd captioner
npm install
npm start
```
Consult your command-line documentation for instructions on ending the execution.
In windows on CMD it is CTRL + C. It responds with a prompt asking if you would like to quit.


Then open a chrome to [localhost:3000](localhost:3000) and enjoy the captions:

![screenshot](https://i.imgur.com/YziSWqt.png")

After being prompted to enable your microphone, it will convert your microphone
input to text output on the screen.

## supported browser

| Google Chrome | Mozilla Firefox | Opera | Safari | Internet Explorer |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :x: | :x: | :x: | :x: |

# credit
Many thanks to the brilliant Daniel Shiffman's instruction in:

The Coding Train - https://www.youtube.com/watch?v=q_bXBcmfTJM

And acknowledging the creator of p5.Speech(), rev3rend on github 'aka' R. Luke DuBois. 
Many thanks for this API, and building a better enviroment for those living with disabilities... 
and nerds, us too.

Implimentation authored by mjrdnk.
