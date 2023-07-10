(function(){
    "use strict";

    let key = "m";
    
    document.querySelector("#convert").addEventListener('submit', function(event){
    event.preventDefault();
    const conversion = parseFloat(document.querySelector("#convert input[name='distance']").value);
    const div = document.querySelector("#answer");
    div.innerHTML ="";
    if(conversion){
        if(key == "m") {
        div.appendChild(document.createTextNode(1.609344 * conversion.toFixed(3)));
        } else if(key == "k") {
        div.appendChild(document.createTextNode(0.621371 * conversion.toFixed(3)));
        }
    } else {
        div.appendChild(document.createTextNode("Please put number value!"));
    }

});

    document.addEventListener('keypress', function(event){
        let name = event.key;
        const title = document.querySelector("h1");
        const pElem = document.getElementsByClassName("container top")[0].getElementsByTagName("p")[0];
          if(name == "k"){
            key = name;
            title.innerHTML = "KILOMETERS TO MILES CONVERTER";
            pElem.innerHTML = "<p>Type in a number of kilometers and click the button to convert the distance to miles.</p>";
        
        } else if(name == "m") {
            key = name;
            title.innerHTML = "MILES TO KILOMETERS CONVERTER";
            pElem.innerHTML = "<p>Type in a number of miles and click the button to convert the distance to kilometers.</p>";
    
        }

    })
})();
