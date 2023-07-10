const images = ["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg","images/image5.jpg"]
nextlink = document.querySelector("#next");
prevLink = document.querySelector("#previous");
imageDiv = document.querySelector("#myimage");
(function(){
nextlink.addEventListener('click', function(event){
     let currentImageName = imageDiv.getAttribute('src');
     let index = images.indexOf(currentImageName);
     if(index != images.length-1){
         imageDiv.setAttribute('src', images[index+1]);
     } else {
         imageDiv.setAttribute('src', images[0]);
     }
});
})();

(function(){
prevLink.addEventListener('click', function(event){
    let currentImageName = imageDiv.getAttribute('src');
     console.log(currentImageName);
     let index = images.indexOf(currentImageName);
     if(index != 0){
         imageDiv.setAttribute('src', images[index-1]);
     } else {
         imageDiv.setAttribute('src', images[images.length-1]);
     }
});
})();