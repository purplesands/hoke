document.addEventListener('DOMContentLoaded', e=> {
  function noise(letter){
    synSound.play()
  }

songForm = document.querySelector('#songForm')
  songForm.addEventListener('submit', e => {
    e.preventDefault()
    let song = e.target.song.value.split("")
    console.log(song)

    for(var i = 0;i < song.length; i++){
        let k = i;
        setTimeout(function(){
          console.log(song[k])
            soundCheck(song[k]);
        }, 750 * (k + 1));
    }

}
)

function soundCheck(ltr){

  let i = 0
  switch (ltr) {
    case "a":
    aS = new Audio("assets/1.wav", i)
    i++
    aS.play()
    break;
    case "b":
    bS = new Audio("assets/2.wav", i)
    i++
    bS.play()
    break;
    case "c":
    cS = new Audio("assets/3.wav", i)
    i++
    cS.play()
    break;
    case "d":
    dS = new Audio("assets/4.wav", i)
    i++
    dS.play()
    break;
    case "e":
    eS = new Audio("assets/5.wav", i)
    i++
    eS.play()
    break;
  }
}


renderSounds()

})

function Channel(audio_uri) {
	this.audio_uri = audio_uri;
	this.resource = new Audio(audio_uri);
}

Channel.prototype.play = function() {
	// Try refreshing the resource altogether
	this.resource.play();
}

function Switcher(audio_uri, num) {
	this.channels = [];
	this.num = num;
	this.index = 0;

	for (var i = 0; i < num; i++) {
		this.channels.push(new Channel(audio_uri));
	}
}

Switcher.prototype.play = function() {
	this.channels[this.index++].play();
	this.index = this.index < this.num ? this.index : 0;
}


function renderSounds() {
  aS = new Audio("assets/1.wav", 20)
}
