//consegna

/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 (cioè quello che risulta, non esattamente quello :occhiolino: )*/

//richiesta nome
const nome = prompt("Qual è il tuo nome?");
console.log(nome);

//richiesta cognome
const cognome = prompt("Ed il tuo cognome?");
console.log(cognome);

//richiesta colore preferito
const colore = prompt("Quale colore preferisci?");
console.log(colore);

//tutto insieme
console.log(`Ecco la tua password-super-segreta: ${nome}${cognome}${colore}21`);

document.getElementById("mio_id").innerHTML=`Ecco la tua password-super-segreta: ${nome}${cognome}${colore}21`;