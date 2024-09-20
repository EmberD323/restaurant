import "./styles.css";
import pageLoad from "./homepage.js";
import loadMenu from "./menu.js";
import contactLoad from "./contact.js";
pageLoad();

const DOM = document.querySelector("body").childNodes;
const headerDOM = DOM[1].childNodes;
console.log(DOM);
headerDOM.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        const contentDOM = DOM[3];
        contentDOM.innerHTML=""; //delete old page
        let buttonID = e.target.id;
        console.log(buttonID);
        if(buttonID == "contact"){
            contactLoad();
        }
        else if(buttonID == "menu"){
            loadMenu();
        }
        else if(buttonID == "home"){
            pageLoad();
        }
    })
});