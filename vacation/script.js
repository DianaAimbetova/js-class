(function(){
"use strict";
document.querySelector("#destination_details").addEventListener('submit', handleForm);

function handleForm(event){

event.preventDefault();

const destName = document.querySelector("#name").value;
const destLocation = document.querySelector("#location").value;
const imageURL = document.querySelector("#photo").value;
const destDesc = document.querySelector("#description").value;

const wishList = document.querySelector("#destinations_container");
document.querySelector("#destination_details").reset();

var destCard = addCard(destName, destLocation, imageURL, destDesc);

if(wishList.children.length === 0) {
    document.querySelector("#title").innerHTML = "My Wish List"
}

wishList.appendChild(destCard);
makeEditable();

}

function addCard(destName, destLocation, imageURL, destDesc) {
    const card = document.createElement("div");
    card.className = "card";
    const img = document.createElement("img"); 
    if(imageURL){
        if(isValidImageUrl(imageURL)){
            img.src = imageURL;
        } else{
            img.src = "images/signpost.jpg";
        }
    } else {
        img.src = "images/signpost.jpg";
    }

    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const h3Elem = document.createElement("h3");
    h3Elem.innerText = destName;
    cardBody.appendChild(h3Elem);

    const h4Elem = document.createElement("h4");
    h4Elem.innerText = destLocation;
    cardBody.appendChild(h4Elem);

    if(destDesc) {
        const pElem = document.createElement("p");
        pElem.className = "card-text";
        pElem.innerText = destDesc;
        cardBody.appendChild(pElem);
    }

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.addEventListener('click', removeCard);
    cardBody.appendChild(removeBtn);

    card.appendChild(cardBody);

    return card;
}

function removeCard(event) {
    const card = event.target.parentElement.parentElement;
    card.remove();
}

function isValidImageUrl(text) {
    const pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    return pattern.test(text);
}

function makeEditable(){
    document.querySelectorAll("h3").forEach(each => {
        each.setAttribute("contenteditable", true);
    });
    document.querySelectorAll("h4").forEach(each => {
        each.setAttribute("contenteditable", true);
    });
    document.querySelectorAll("p").forEach(each => {
        each.setAttribute("contenteditable", true);
    });
}
})();