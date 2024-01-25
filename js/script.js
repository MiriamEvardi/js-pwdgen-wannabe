let yourname;
yourname = prompt("Qual è il tuo nome?");

document.getElementById("my_name").innerHTML = yourname;


let your_familyname;
your_familyname = prompt("Qual è il tuo cognome?");

document.getElementById("my_familyname").innerHTML = your_familyname;


let your_color;
your_color = prompt("Qual è il tuo colore preferito?");

document.getElementById("my_color").innerHTML = your_color;


const your_password = yourname + your_familyname + your_color + 23;
document.getElementById("password").innerHTML = your_password;