

/*
                   TODO
1. DO the on hover.[DONE]
2. Figure out how to make next image Index dependent on the showing image index.[DONE]
3. Finish The previous button function.[DONE]
4. DO the table of contents.[DONE]
5. DO the smooth transition[Not DONE]
6. Fix ALL the bugs[Not DONE - one or two left]

*/

// Selectors 
let images = document.getElementsByClassName("slider-imgs");
let tocImages = document.getElementsByClassName("toc-imgs");
let showingImageIndex = 0;
let nextImageIndex = 1;
let beforeImageIndex = showingImageIndex - 1;
let showTime = 8000;
let timeout;
const buttons = document.querySelectorAll("i");
const prev = document.querySelector("fa-arrow-circle-left"); 

showImages();
onClick();
onHover();
toc();

// Function to show the images in a sequence 

function showImages() {
    
    // loop to keep the images display none
    
    for(i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }
    
    showingImageIndex++; 
    
    if (showingImageIndex > images.length){
        showingImageIndex = 1;
    }

    if (showingImageIndex === 3) {
        nextImageIndex = 0;
    }

     // Get the showing image, display it, increase the showing image value
     
     images[showingImageIndex - 1].style.display = "block";

    // Run the function every 2 seconds  

    timeout = setTimeout(showImages, showTime);
}




// Function to switch between image on click

function onClick() {

    if(showingImageIndex === 0){
        nextImageIndex = 1;
    }

    if(showingImageIndex === 1){
        nextImageIndex = 2;
    }

    if(showingImageIndex === 2){
        nextImageIndex = 3;
    }

    if(showingImageIndex === 3){
        nextImageIndex = 0;
    }

    if (showingImageIndex === 0){
        beforeImageIndex = 3;
    }
    if (showingImageIndex === 1){
        beforeImageIndex = 0;
    }
    if (showingImageIndex === 2){
        beforeImageIndex = 1;
    }
    if (showingImageIndex === 3){
        beforeImageIndex = 2;
    }


    buttons[
        addEventListener("click", function () {
          images[showingImageIndex - 1].style.display = "none";
          images[nextImageIndex].style.display = "block";
          nextImageIndex++;
    
          prev.addEventListener("click", function() {
            images[beforeImageIndex].style.display = "block";
            beforeImageIndex--;
          });
        })
      ];
}


function onHover() {
  
    images[0].addEventListener("mouseover", function(){
         clearTimeout(timeout);
    });
    images[1].addEventListener("mouseover", function(){
         clearTimeout(timeout);
    });
    images[2].addEventListener("mouseover", function(){
         clearTimeout(timeout);
    });
    images[3].addEventListener("mouseover", function(){
         clearTimeout(timeout);
    });
//   DO THE MOUSEOUT!!!!!!!!!!!!

    images[0].addEventListener("mouseout", function(){
        setTimeout(showImages, showTime);
    }); 
    images[1].addEventListener("mouseout", function(){
        setTimeout(showImages, showTime);
    }); 
    images[2].addEventListener("mouseout", function(){
        setTimeout(showImages, showTime);
    }); 
    images[3].addEventListener("mouseout", function(){
        setTimeout(showImages, showTime);
    }); 

}

function toc() {
    tocImages[0].addEventListener("click", function(){
      images[0].style.display = "block";
    });
    tocImages[1].addEventListener("click", function(){
      images[1].style.display = "block";
    });
    tocImages[2].addEventListener("click", function(){
      images[2].style.display = "block";
    });
    tocImages[3].addEventListener("click", function(){
      images[3].style.display = "block";
    });
}