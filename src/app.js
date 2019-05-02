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
        }, 1000 * (k + 1));
    }

}
)

function soundCheck(ltr){
  switch (ltr) {
    case "a":
    aS.play()
    break;
    case "b":
    bS.play()
    break;
  }
}


renderSounds()

})

function Sound(src) {
  this.sound = document.createElement("audio")
  this.sound.src = src
  this.sound.setAttribute("preload", "auto")
  this.sound.setAttribute("controls", "none")
  this.sound.style.display = "none"
  document.body.appendChild(this.sound)
}



Sound.prototype.play = function(){
  this.sound.play();
}

Sound.prototype.stop = function(){
  this.sound.pause();
}

function renderSounds() {
  aS = new Sound("assets/syn.wav")
  bS = new Sound("assets/tamb.wav")

}
