(function(){
		
    "use strict";
    document.querySelector("#convert").addEventListener('submit', function(event){
        event.preventDefault();
        const inMiles = parseFloat(document.querySelector("#convert input[name='distance']").value);
        const div = document.querySelector("#answer");
        div.innerHTML ="";
        if(inMiles){
            const value = 1.609344 * inMiles;
            div.appendChild(document.createTextNode(value.toFixed(3)));
        } else {
            div.appendChild(document.createTextNode("Please put number value!"));
        }

    });
})();