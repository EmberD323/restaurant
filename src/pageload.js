import cookieImage from "./cookies.jpg";
const pageLoad = (function(){
    const contentDOM = document.querySelector("#content");
    
    const restaurantNameDOM = document.createElement("div");
    restaurantNameDOM.classList.add("name");
    restaurantNameDOM.textContent = "Ember's Cookies";
    contentDOM.appendChild(restaurantNameDOM);

    const image = document.createElement("img");
    image.src = cookieImage;
    image.alt = "cookie"
    contentDOM.appendChild(image);

    const reviewDOM = document.createElement("div");
    reviewDOM.classList.add("review");
    reviewDOM.textContent = "I just can't get enough of those maple cookies! - Bailey";
    contentDOM.appendChild(reviewDOM);
   
    
    
    


    return{};
})();

export{pageLoad};


