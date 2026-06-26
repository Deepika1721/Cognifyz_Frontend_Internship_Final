function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let people = document.getElementById("people").value;

    let message = document.getElementById("message");

    if(name === "" || email === "" || people === ""){

        message.innerHTML = "❌ Please fill all fields";
        message.style.color = "red";

        return false;
    }

    message.innerHTML = "✅ Form Submitted Successfully";
    message.style.color = "green";

    return false;
}