import chocolateChip from "./images/chocolate-chip.jpeg";
import christmas from "./images/christmas.jpg";
import sugar from "./images/soft-sugar-cookies.jpg";
import jamThumb from "./images/jam-thumbprint.jpg";


const loadMenu = (function(){
    const contentDOM = document.querySelector("#content");
    const headerDOM = document.createElement("div");
    headerDOM.classList.add("header");
    headerDOM.textContent = "Menu";
    contentDOM.appendChild(headerDOM);

    const imageArray = [chocolateChip,christmas,sugar,jamThumb];
    const itemNames = ["Chocolate Chip Cookies","Christmas Cookies","Soft Frosted Sugar Cookies","Jam Thumbnail Cookies"];

    for(let i=1;i<5;i++){
        const itemDOM = document.createElement("div");
        itemDOM.classList.add("item");
        contentDOM.appendChild(itemDOM);

        const itemWordsDOM = document.createElement("div");
        itemWordsDOM.classList.add("words");
        itemWordsDOM.textContent = itemNames[i-1];
        itemDOM.appendChild(itemWordsDOM);

        const image = document.createElement("img");
        image.src = imageArray[i-1];
        image.alt = "cookie";
        itemDOM.appendChild(image);
        
    }
    return{};
});

export default loadMenu;


