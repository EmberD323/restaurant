
const contactLoad = (function(){
    const contentDOM = document.querySelector("#content");
    contentDOM.innerHTML=""; //delete old page

    const headerDOM = document.createElement("div");
    headerDOM.classList.add("header");
    headerDOM.textContent = "Contact Us";
    contentDOM.appendChild(headerDOM);

    const itemHeading = ["Ember","Ember's helper","Ember's helper two"];
    const itemWords = ["ember@cookie.com","embershelper@cookie.com","emberssecondhelper@cookie.com"];

    for(let i=1;i<4;i++){
        const itemDOM = document.createElement("div");
        itemDOM.classList.add("item"+i);
        contentDOM.appendChild(itemDOM);

        const itemHeadingDOM = document.createElement("div");
        itemHeadingDOM.classList.add("heading");
        itemHeadingDOM.textContent = itemHeading[i-1];
        itemDOM.appendChild(itemHeadingDOM);

        const itemWordsDOM = document.createElement("div");
        itemWordsDOM.classList.add("words");
        itemWordsDOM.textContent = itemWords[i-1];
        itemDOM.appendChild(itemWordsDOM);
        
    }
    return{};
});

export default contactLoad;



