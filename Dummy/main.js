let images = document.querySelectorAll("img");
const buttons = document.querySelectorAll("i");
const prev = document.querySelector("fa-arrow-circle-left");
let showTime = 10000;
let showingImageIndex = 0;
let nextImageIndex = 1;
let beforeImageIndex = showingImageIndex - 1;
let timeout;

showImages();
onClick();
nextImage();
onHover();

function nextImage() {
  nextImageIndex = showingImageIndex += nextImageIndex;
}

function onClick() {
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  buttons[
    addEventListener("click", function () {
      images[showingImageIndex - 1].style.display = "none";
      images[nextImageIndex].style.display = "block";
      nextImageIndex++;

      prev.addEventListener("click", function () {
        images[beforeImageIndex].style.display = "block";
        beforeImageIndex--;
      });
    })
  ];

}

function showImages() {
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  showingImageIndex++;

  if (showingImageIndex > images.length) {
    showingImageIndex = 1;
  }

  if (nextImageIndex > images.length - 1) {
    nextImageIndex = 0;
  }

  if (showingImageIndex === 3){
    nextImageIndex = 0;
  }

  images[showingImageIndex - 1].style.display = "block";
 

  timeout = setTimeout(showImages , showTime);
}


function onHover() {

  images[showingImageIndex - 1].addEventListener("mouseover", function(){
     clearTimeout(timeout);
  });


  images[showingImageIndex - 1].addEventListener("mouseout", function(){
     setTimeout(showImages, showTime);
  });
}
