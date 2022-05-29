// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// Solution 1:

function isIsogram(str){
    let arr = {};
    str = str.toLowerCase();
   
    for (let i = 0; i < str.length; i++) {
      if (arr[str[i]]) {
        return false;
      }
      arr[str[i]] = true;
    }
    return true; 
 }

// Solution 2:

function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }