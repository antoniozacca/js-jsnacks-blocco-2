'use strict'

const primoArray = [1, 2, 3,  4, 5];
const secondoArray = [6, 7, 8];

if (primoArray.length > secondoArray.length) {
    for (let i = secondoArray.length; i < primoArray.length; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        secondoArray.push(randomNumber);
    
        
    }
} else {
    for (let i = primoArray.length; i < secondoArray.length; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        primoArray.push(randomNumber);
        
    }
}
console.log(primoArray);
console.log(secondoArray);