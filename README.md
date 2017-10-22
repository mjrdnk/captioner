# Captioner
Captioner, creates dynamic captions based on speech recognition.

# Requirements
You should have node.js and npm installed. Aswell as a microphone available for detection.
This is not a local execution. This is handled with Google speech recognition on the cloud,
via the p5.speech.js library. You must install this as a dependancy for a new p5.SpeechRec().

# Running

```js
function setup() {
    noCanvas();
    let recording = new p5.SpeechRec('en-US');
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

# usage
```bash
git clone https://github.com/mjrdnk/captioner.git
cd captioner
npm install
npm start
```

Navigate to the URL: localhost:3000 from Chrome.
After being prompted to enable your microphone, it will convert your microphone
input to text output on the screen.

# compatibility
Browser compatibility for now: Chrome.

# credit
The Coding Train - https://www.youtube.com/watch?v=q_bXBcmfTJM
