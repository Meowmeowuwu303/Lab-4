'use strict';

// 1. Цикл for
const sumFor = (...args) => {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};

// 2. Цикл for..of
const sumForOf = (...args) => {
  let result = 0;
  for (const value of args) {
    result += value;
  }
  return result;
};

// 3. Цикл while
const sumWhile = (...args) => {
  let result = 0;
  let index = 0;
  while (index < args.length) {
    result += args[index];
    index++;
  }
  return result;
};

// 4. Цикл do..while
const sumDoWhile = (...args) => {
  let result = 0;
  if (args.length === 0) return 0;
  
  let counter = 0;
  do {
    result += args[counter];
    counter++;
  } while (counter < args.length);
  
  return result;
};

// 5. Метод Array.prototype.reduce()
const sum = (...args) => {
  return args.reduce((accumulator, current) => accumulator + current, 0);
};

// Тестування
console.log('sum(5, 3, 8):', sum(5, 3, 8)); // 16
console.log('sum(0):', sum(0)); // 0
console.log('sum():', sum()); // 0
console.log('sum(2, -2, 2):', sum(2, -2, 2)); // 2
console.log('sum(15, -3, -3, -3):', sum(15, -3, -3, -3)); // 6

// Ітерування по двумірному масиву - знайти максимальний елемент
const max = (matrix) => {
  let maxValue = matrix[0][0];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxValue) {
        maxValue = matrix[i][j];
      }
    }
  }
  
  return maxValue;
};

const maxElement = max([[2, 4, 6], [8, 10, 12], [14, 16, 18]]);
console.log('Max element:', maxElement); // 18

// Ітерування об'єктів-справочників
const persons = {
  newton: { born: 1643, died: 1727 },
  einstein: { born: 1879, died: 1955 },
  curie: { born: 1867, died: 1934 },
  tesla: { born: 1856, died: 1943 },
};

const ages = (people) => {
  const result = {};
  
  for (const name in people) {
    const person = people[name];
    result[name] = person.died - person.born;
  }
  
  return result;
};
console.log('Ages:', ages(persons));
