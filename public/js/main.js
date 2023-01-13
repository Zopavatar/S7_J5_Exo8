let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}


let elements = document.querySelector("div#liste-competences").querySelectorAll("h2");

console.log(elements);

elements.forEach(element =>{
    for(const property in competences){
        if(element.innerText == property){
            element.innerText += ` : ${competences[property]}`;

            switch(true){
                case competences[property] == '100%':
                    element.style.background = "gold";
                    element.style.color = "black";
                    break;

                case competences[property] < "50%":
                    element.style.background = "red";
                    break;
                case competences[property] > '50%':
                    element.style.background = "green";
                    element.style.color = "white";
                    break;

                 case competences[property] == '50%':
                    element.style.background = "none";
                    break;

            }
        }
    }
})



