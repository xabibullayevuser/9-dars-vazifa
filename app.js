//100-masala

// function forHomeWrok(str) {
//     let [tagName, numStr] = str.split("*");
  
//     let num = parseInt(numStr);
  
//     let html = "";
  
//     for (let i = 0; i < num; i++) {
//       html += `<${tagName}></${tagName}>`;
//     }
  
//     return html;
//   }
//   console.log(forHomeWrok("div*2")); // console: "<div></div><div></div>"
//   console.log(forHomeWrok("p*1"));   // console: "<p></p>"
//   console.log(forHomeWrok("li*3"));  // console: "<li></li><li></li><li></li>"

//101-masala

// function forHomeWork(number) {
//     if (typeof number !== 'number' || number <= 0) {
//       return "Integer numbers";
//     }
  
//     let sum = 0;
  
//     for (let i = 1; i <= number; i++) {
//       sum += i;
//     }
  
//     return sum;
//   }
//   console.log(forHomeWork(3));  
//   console.log(forHomeWork(10)); 
//   console.log(forHomeWork(7));  

//102-masala

// function forHomeWork(number, rangeObject) {
//     if (!("min" in rangeObject) || !("max" in rangeObject)) {
//       throw new Error("Min-max property");
//     }

//     if (typeof number !== "number") {
//       throw new Error("Invalid number");
//     }

//     return number >= rangeObject.min && number <= rangeObject.max;
//   }
  
//   let minmax1 = { min: 0, max: 5 };
//   let minmax2 = { min: 4, max: 5 };
//   let minmax3 = { min: 6, max: 10};
//   let minmax4 = { min: 5, max: 5 };

//   console.log(forHomeWork(4, minmax1));
//   console.log(forHomeWork(4, minmax2)); 
//   console.log(forHomeWork(4, minmax3));
//   console.log(forHomeWork(5, minmax4));

//103-masala: ??????????????????????????????

//104-masala

// function forHomeWork(arr) {
//     return arr.map((element, index) => element + index);
// }

// console.log(forHomeWork([0, 0, 0, 0, 0]));
// console.log(forHomeWork([1, 2, 3, 4, 5]));
// console.log(forHomeWork([5, 4, 3, 2, 1]));


//105-masala

// function forHomeWork(drinks) {
//     let sugarDrinks = ["cola", "fanta"];
  
//     return drinks.filter(drink => sugarDrinks.includes(drink));
// }

// console.log(forHomeWork(["fanta", "cola", "water"]));
// console.log(forHomeWork(["fanta", "cola"]));

//106-masala

// function forHomeWork(number) {
//     if (typeof number !== 'number' || Number.isNaN(number)) {
//       return "integer number";
//     }
  
//     const numString = number.toString();
  
//     return numString.length;
//   }

//   console.log(forHomeWork(123)); 
//   console.log(forHomeWork(56));   
//   console.log(forHomeWork(7154));  
//   console.log(forHomeWork(61217311514)); 
//   console.log(forHomeWork(0));     

//108-masala

// function forHomeWork(min, max) {

//     if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
//       throw new Error("Numbers");
//     }
//     let range = max - min + 1;

//     return Math.floor(Math.random() * range) + min;
// }

// console.log(forHomeWork(5, 9)); 
// console.log(forHomeWork(5, 9)); 
// console.log(forHomeWork(5, 5));





  
  
  
  


