/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 1");

function area(l1, l2) {
  const resulProd = l1 * l2;
  return resulProd;
}
console.log(area(5, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 2");

function crazySum(num1, num2) {
  if (num1 === num2) {
    const addOper = (num1 + num2) * 3;
    return addOper;
  } else {
    return num1 + num2;
  }
}
console.log(crazySum(23, 55));
console.log(crazySum(25, 25));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 3");

function crazyDiff(x) {
  if (x <= 19) {
    const diffAbs = 19 - x;
    return diffAbs;
  } else {
    return (x - 19) * 3;
  }
}
console.log(crazyDiff(5));
console.log(crazyDiff(44));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 4");

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(22));
console.log(boundary(16));
console.log(boundary(400));
console.log(boundary(100));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 5");

function epify(s) {
  let epify = null;
  if (typeof s === "string") {
    if (s.indexOf("EPICODE") === 0) {
      epify = s;
      return epify;
    } else {
      epify = "EPICODE " + s;

      return epify;
    }
  } else {
    return "Field requires a string.";
  }
}
console.log(epify(2));
console.log(epify("EPICODE is awesome"));
console.log(epify("is awesome"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 6");

function check3and7(pos) {
  if (pos > 0 && (pos % 3 === 0 || pos % 7 === 0)) {
    return true;
  } else return false;
}
console.log(check3and7(22));
console.log(check3and7(21));
console.log(check3and7(27));
console.log(check3and7(-9));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 7");

function reverseString(string) {
  let reverseString = null;
  if (typeof string === "string") {
    reverseString = string.split("").reverse().join("");
    return reverseString;
  } else {
    return "Field requires a string.";
  }
}
console.log(reverseString("Non sono un palindromo"));
console.log(reverseString("I topi non avevano nipoti"));
console.log(reverseString(0));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 8");

const upperFirst = function (str) {
  let words = str.split(""); // converto in array
  console.log(words);

  let stringaString = []; // creo un array

  for (i = 0; i < words.length; i++) {
    let firstchar = words[i].charAt(0); //partendo dalla posizione 0
    //console.log(firstchar);
    let upperCase = firstchar.toUpperCase(); //tutto maiuscolo
    //console.log(upperCase);
    let cutString = words[i].slice(1); // prendo in considerazione dalla posizione 1
    console.log(cutString);
    let finalWord = upperCase + cutString;
    /* console.log(finalWord); */
    stringaString.push(finalWord);
  }
  console.log(stringaString.join("")); // riconverto in stringa
};
upperFirst("ok ci siamo!");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 9");

function cutString(stringaString) {
  const newString = stringaString.slice(1, stringaString.length - 1);

  return newString;
}
console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("ESERCIZIO 10");

const giveMeRandom = function (n) {
  const arr = [];

  for (i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 11));
  }
  return arr;
};
console.log(giveMeRandom(7));
