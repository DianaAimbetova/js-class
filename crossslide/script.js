(function(){
const images = ["slides/image1.jpg","slides/image2.jpg","slides/image3.jpg","slides/image4.jpg","slides/image5.jpg"]
const nextlink = document.querySelector("#next");
const prevLink = document.querySelector("#previous");
const imageDiv = document.querySelector("#myimage");
const containerDiv = document.querySelector("#content");


nextlink.addEventListener('click', function(event){
    event.preventDefault();

      currentImageName = imageDiv.getAttribute('src');
      index = images.indexOf(currentImageName);
      newSlide = document.createElement('img');
      newSlide.setAttribute('class', 'fadeinimg');
     if(index != images.length-1){
        imageDiv.setAttribute('src', images[index+1]);
        newSlide.setAttribute('src', images[index+1]);
     } else {
        imageDiv.setAttribute('src', images[0]);
        newSlide.setAttribute('src', images[0]);
     }
     containerDiv.appendChild(newSlide);
});



prevLink.addEventListener('click', function(event){
    event.preventDefault();

    let currentImageName = imageDiv.getAttribute('src');
     console.log(currentImageName);
     let index = images.indexOf(currentImageName);
     let newSlide = document.createElement('img');
     newSlide.setAttribute('class', 'fadeinimg');
     if(index != 0){
         imageDiv.setAttribute('src', images[index-1]);
         newSlide.setAttribute('src', images[index-1]);
     } else {
         imageDiv.setAttribute('src', images[images.length-1]);
         newSlide.setAttribute('src', images[images.length-1]);
     }
     containerDiv.appendChild(newSlide);
});


if(containerDiv.children.length>2){
    containerDiv.removeChild(containerDiv.children[0]);
}
})();