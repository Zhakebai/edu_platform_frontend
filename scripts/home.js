var sound1= new Audio();
sound1.src = "../sounds/click.wav";

const headerBg = () =>{
    const header = document.querySelector(".js-header");

    window.addEventListener("scroll", function(){
       if(this.scrollY > 0){
        header.classList.add("bg-reveal");
       } 
       else{
        header.classList.remove("bg-reveal");
       }
    })
}

const image = document.getElementById('shakeImage');

function shakeImage() {
  image.classList.add('shake');

  setTimeout(() => {
    image.classList.remove('shake');
  }, 500);
}

image.addEventListener('click', shakeImage);

const image2 = document.getElementById('shakeImg');

function shakeImg() {
  image2.classList.add('shake');

  setTimeout(() => {
    image2.classList.remove('shake');
  }, 500);
}

image2.addEventListener('click', shakeImg);


