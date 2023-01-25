// const loginForm = document.getElementById("login_form");
// const loginInput = loginForm.querySelector("input");
// const loginButton =  loginForm.querySelector("button");

// same as

const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
// const loginButton = document.querySelector("#login_form button");

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     // if (username === "") {
//     //     alert("Please write your name");
//     // } else if (username.length > 15) {
//     //     alert("your name is too long");
//     // } 

//     console.log(username);
// }

function onLoginSubmit() {
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

// loginButton.addEventListener("click", onLoginBtnClick);

