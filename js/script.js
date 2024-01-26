const yourname;
yourname = prompt("Qual è il tuo nome?");

document.getElementById("my_name").innerHTML = yourname;


const your_familyname;
your_familyname = prompt("Qual è il tuo cognome?");

document.getElementById("my_familyname").innerHTML = your_familyname;


const your_color;
your_color = prompt("Qual è il tuo colore preferito?");

document.getElementById("my_color").innerHTML = your_color;

const randomNumber = 23


const your_password = yourname + your_familyname + your_color + randomNumber;
document.getElementById("password").innerHTML = your_password;