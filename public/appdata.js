console.log(firebase);

const auth = firebase.auth();

const SignIn = document.querySelector("SignIn");
const SignOut = document.querySelector("SignOut");
const whenSignedIn = document.querySelector("whenSignedIn");
const whenSignedout = document.querySelector("whenSignedOut");

const provider = new firebase.auth.GoogleAuthProvider();

document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontSize = "50px";
document.querySelector("h1").style.textDecoration = "underline";
