function setup() {
    noCanvas();
    let recording = new p5.SpeechRec('en-US');
    recording.onResult = showResult;

    let continuous = false;
    let iterim = true;
  
    recording.start(continuous, iterim);
    
    function showResult() {
        if (recording.resultString) {
          document.getElementById('caption').innerText = recording.resultString;
        }
    }
}