document.querySelector('.hamburger-btn').addEventListener('click', () => {

    // Select the element with the class "navbar-content-mobile"

    
    const navbarContentMobile = document.querySelector(".navbar-content-mobile");

    // Set the CSS styles using the style property


    if (navbarContentMobile.style.display === "none") {
        navbarContentMobile.style.display = "grid";
        navbarContentMobile.style.gridTemplateColumns = "auto";
        navbarContentMobile.style.backgroundColor = "white";
        navbarContentMobile.style.marginRight = "-10px";
        navbarContentMobile.style.marginLeft = "-10px";
        navbarContentMobile.style.textAlign = "left";
        navbarContentMobile.style.padding = "10px";
        console.log("the thing happened")
    } else {
        navbarContentMobile.style.display = "none";
        console.log("the thing did not happen")
    }

})