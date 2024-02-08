document.addEventListener("submit",() =>{
    let password = document.getElementById("password").value;
    let passCheck = document.getElementById("passCheck").value;
    let error = document.getElementById("error");
    if(password == passCheck){
        error.textContent = "";
    }else{
        error.textContent = "Passwords do not match";
        event.preventDefault();
    }

})