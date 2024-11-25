const form = document.querySelector('form');

form.addEventListener('submit', (event) => { //prevengo l'invio del form prima che tutti i dati siano compilati
     event.preventDefault();
     const fullName = document.getElementById('fullName').value;
     const distance = Number(document.getElementById('distance').value);
     const age = document.getElementById('age').value;
     const ticketName = document.querySelector('.name-ticket');
     const ticketType = document.querySelector('.ticket-type');
     const carriageNumber = document.querySelector('.carriage');
     const ticketCode = document.querySelector('.ticket-code');
     const fullPrice = document.querySelector('.price');
     const confirm = document.querySelector('.submit');
     const showFooter = document.querySelector('.hide');
     
     const carriage = Math.floor(Math.random()*10)+1;
     carriageNumber.innerText = carriage;

     const cP = Math.floor(Math.random()*100000)+1;
     ticketCode.innerText = cP;

     // Controllo di validazione 
     if (!fullName || !distance || !age) {
         alert('Per favore, compila tutti i campi.');
          return; 
     }
     const nameParts = fullName.split(' ');
     if (nameParts.length < 2) {
         alert('Per favore, inserisci sia il nome che il cognome.');
        return;
     }
     

     const priceCalculator = (km, ageRange) => {
        if (isNaN(km) || km <= 0) {
             console.error("Devi inserire un numero superiore a 0");
             return 0;
        } 
        let price = (21 / 100) * km;
        if (ageRange === 'u18') {
             price = price * (1 - 20 / 100);
        } else if (ageRange === 'senior') {
            price = price * (1 - 40 / 100);
        } else {
            price = price; 
        } 
        return price.toFixed(2); // Formatto a due cifre decimali con toFixed()
        }
        fullPrice.innerText =`${priceCalculator(distance, age)} € tasse comprese` ;
    
        ticketName.innerText = fullName.trim();
        if(age === 'u18'){
            ticketType.innerText = 'Sconto Under 18';
        } else if(age === 'senior'){
            ticketType.innerText = 'Sconto Over 60';
        } else{
            ticketType.innerText = 'Biglietto standard';
        }
        confirm.value = 'Conferma';
        showFooter.classList.remove('hide');
        
        form.reset();
        


});









//debug
/*let età = 40;
console.log("Età:", età ,"Anni");
let distanza = 50;
console.log("Distanza:", distanza,"Km");
*/

/*let price = (21/100) * distanza;
const discountUnder = 20;
const discountOver = 40;*/