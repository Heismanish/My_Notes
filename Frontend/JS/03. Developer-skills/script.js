// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log('Manish');

// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures
// of one day, calculate the temperature amplitude. Keep in mind
// that sometimes there might be a sensor error."
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// - What is temperature amplitude? Answer: Difference between highest and lowest temp
// - how to compute max and min temperature?
// - What's a sensor error and what to do ?

// 2. Breeaking up into sub-problems.
// - How to ignore errors?
// - Find max value in temp array.
// - Find min value in temp array.
// - Subtraact minn from max (amplitude ) and return it.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now recieve 2 arrays of temps.

// 1. Understanding the problem
// - With 2 arrays, should we implement funnctionality

// 2. Breaking up into sub problems
// -  Merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
};
const amplitudeNew = calcTempAmplitudeNew(temperatures);
console.log(amplitudeNew);
*/

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // 3. Fix
    value: Number(prompt('Degree celcius: ')),
  };
  // 2. Find
  console.table(measurement);

  debugger; //  adds breakpoint at this line and opens up the debugger tool in browser.
  const kelvin = measurement.value + 273;
  return kelvin;
};

// 1. Identify
console.log(measureKelvin());
