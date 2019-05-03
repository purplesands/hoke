document.addEventListener('DOMContentLoaded', e=> {
  function noise(letter){
    synSound.play()
  }

songForm = document.querySelector('#songForm')
  songForm.addEventListener('submit', e => {
    e.preventDefault()
    let song = e.target.song.value.toLowerCase().split("")
    console.log(song)

    for(var i = 0;i < song.length; i++){
        let k = i;
        setTimeout(function(){
          console.log(song[k])
            soundCheck(song[k]);
        }, 3000 * (k + 1));
    }
  }
)


function soundCheck(ltr){
  let i = 0

  i++
  switch (ltr) {
    case "a":
    aS = new Audio("assets/1.wav", i)
    aS.play()
    break;
    case "b":
    bS = new Audio("assets/2.wav", i)
    bS.play()
    break;
    case "c":
    cS = new Audio("assets/3.wav", i)
    cS.play()
    break;
    case "d":
    dS = new Audio("assets/4.wav", i)
    dS.play()
    break;
    case "e":
    eS = new Audio("assets/5.wav", i)
    eS.play()
    break;
    case "f":
    fS = new Audio("assets/6.wav", i)
    fS.play()
    break;
    case "g":
    gS = new Audio("assets/7.wav", i)
    gS.play()
    break;
    case "h":
    hS = new Audio("assets/8.wav", i)
    hS.play()
    break;
    case "i":
    iS = new Audio("assets/9.wav", i)
    iS.play()
    break;
    case "j":
    jS  = new Audio("assets/10.wav", i)
    jS.play()
    break;
    case "k":
    kS  = new Audio("assets/11.wav", i)
    kS.play()
    break;
    case "l":
    lS  = new Audio("assets/12.wav", i)
    lS.play()
    break;
    case "m":
    mS  = new Audio("assets/13.wav", i)
    mS.play()
    break;
    case "n":
    nS  = new Audio("assets/14.wav", i)
    nS.play()
    break;
    case "o":
    oS  = new Audio("assets/15.wav", i)
    oS.play()
    break;
    case "p":
    pS  = new Audio("assets/16.wav", i)
    pS.play()
    break;
    case "q":
    qS  = new Audio("assets/17.wav", i)
    qS.play()
    break;
    case "r":
    rS  = new Audio("assets/18.wav", i)
    rS.play()
    break;
    case "s":
    sS  = new Audio("assets/19.wav", i)
    sS.play()
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
