
const arrNomi = ["paperino", "pippo", "pluto"];

const questionUser = prompt("come ti chiami?")
console.log(questionUser);

if (arrNomi.includes(questionUser)) {
    
    console.log("Sei invitato alla festa di Gatsby");

}else {

    console.log("Non sei invitato");

}