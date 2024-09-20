import cookieImage from "./images/cookies.jpeg";
const pageLoad = (function(){
    const contentDOM = document.querySelector("#content");
    
    const headerDOM = document.createElement("div");
    headerDOM.classList.add("header");
    headerDOM.textContent = "Ember's Cookies";
    contentDOM.appendChild(headerDOM);

    const itemDOM = document.createElement("div");
    itemDOM.classList.add("item");
    contentDOM.appendChild(itemDOM);

   

    const itemWordsDOM = document.createElement("div");
    itemWordsDOM.classList.add("words");
    itemWordsDOM.textContent = "I just can't get enough of those maple cookies! - Bailey";
    itemDOM.appendChild(itemWordsDOM);

    const image = document.createElement("img");
    image.src = cookieImage;
    image.alt = "cookie"
    itemDOM.appendChild(image);
    return{};
});

export default pageLoad;


