var sound1= new Audio();
sound1.src = "../sounds/click.wav";

let btn = document.querySelector('.play-btn');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let video = document.querySelector('video');
btn.onclick = function(){
  btn.classList.add('active');
  clip.classList.add('active');
  video.play();
}
close.onclick = function(){
  btn.classList.remove('active');
  clip.classList.remove('active');
  video.pause();
}

function showNextContent(nextContainerId) {
  
  document.querySelector('.list_container.active').classList.remove('active');

  document.getElementById(nextContainerId).classList.add('active');
}