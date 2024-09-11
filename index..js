// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter some integers separated by commas.",
    "1,2,3,4,5"
  );
  
  // Split the string of numbers into an array of strings.
  const stringArray = userInputString.split(",");
  
  // Convert the array of strings into an array of numbers.
  const numbers = [];
  for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const number = parseInt(str);
    numbers.push(number);
  }
  
  // Peform some calculations on the numbers.
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
  
  // === EDIT THE CODE BELOW ===
  // Complete the functions below to make the program work!
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the length of the array
   */
  function getLength(numbers) {
    // TODO
    return numbers.length;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the sum of the numbers
   */
  function getSum(numbers) {
    // TODO
    let sum = 0;
    let i = 0;
    while(i < numbers.length){
      sum += numbers[i];
      i += 1;
    }
    return sum;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the mean of the numbers
   */
  function getMean(numbers) {
    // TODO
    let sum = 0;
    let count = 0;
    let i = 0;
    while(i < numbers.length){
      sum += numbers[i];
      count += 1;
    }
    const mean = sum / count;
    return mean; 
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the smallest of the numbers
   */
  function getMin(numbers) {
    // TODO
    let min = numbers[0];
    let i = 0;
    while(i < numbers.length){
      if(numbers[i] < min){
        min = numbers[i];
      }
      i += 1;
    }
    return min;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the largest of the numbers
   */
  function getMax(numbers) {
    // TODO
    let max = 0;
    let i = 0;
    while(i < numbers.lenth){
      if(numbers[i] > max){
        max = numbers[i];
      }
      i += 1;
    }
    return max;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the range of the numbers (max - min)
   */
  function getRange(numbers) {
    // TODO
    const range = max - min;
    return range;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number[]} the even numbers in the array
   */
  function getEvens(numbers) {
    // TODO
    let i = 0;
    while(i < numbers.length){
      let mod = numbers[i] % 2;
      if(mod === 0){
        console.log(numbers[i]);
      }
      i += 1;
    }
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number[]} the odd numbers in the array
   */
  function getOdds(numbers) {
    // TODO
    let i = 0;
    while(i < numbers.length){
      let mod = numbers[i] % 2;
      if(mod === 1){
        console.log(numbers[i]);
      }
      i += 1;
    }
  }