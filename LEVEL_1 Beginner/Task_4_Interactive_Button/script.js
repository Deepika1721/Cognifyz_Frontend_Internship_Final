// Explore More Button Color Change
function exploreMore(button){

    button.style.backgroundColor = "#0066ff";
    button.innerHTML = "Loading... 🌍";

    setTimeout(function(){
        button.style.backgroundColor = "#ff6600";
        button.innerHTML = "Explore More";
    },1000);

    alert("Discover amazing places in India 🌍\nMore travel details coming soon!");
}


// Book Your Trip Button Effect
function bookTrip(button){

    button.style.backgroundColor = "green";
    button.innerHTML = "Booked ✅";

    setTimeout(function(){
        button.style.backgroundColor = "#003366";
        button.innerHTML = "Book Your Trip";
    },2000);

    alert("Thank you for choosing Explore India ✈️\nYour trip booking request has been received!");
}


// Image Zoom Function
function zoomImage(image){

    if(image.style.transform === "scale(1.1)"){

        image.style.transform = "scale(1)";

    }
    else{

        image.style.transform = "scale(1.1)";
    }

}