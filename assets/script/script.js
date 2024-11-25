const form = document.querySelector('form');

form.addEventListener('submit', (event) => { //prevengo l'invio del form prima che tutti i dati siano compilati
     event.preventDefault();
     const fullName = document.getElementById('fullName').value;
     const distance = Number(document.getElementById('distance').value);
     const age = document.getElementById('age').value;

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
    console.log(priceCalculator(distance, age));
    
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