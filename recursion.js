/** product: calculate the product of an array of numbers. */
/**
 * 
 * @param {number[]} nums 
 */
function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
/**
 * 
 * @param {string[]} words 
 */
function longest(words) {
  if (words.length === 0) {
    return 0;
  }
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */
/**
 * 
 * @param {string} str 
 */
function everyOther(str) {
  if (str.length === 0) {
    return '';
  }
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */
/**
 * 
 * @param {string} str 
 */
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
/**
 * 
 * @param {any[]} arr 
 * @param {any} val 
 */
function findIndex(arr, val) {
  if (arr.length === 0) return -1 
  if (arr[0] === val) return 0
  const idx = findIndex(arr.slice(1), val)
  return idx >= 0 ? idx + 1 : -1
}

/** revString: return a copy of a string, but in reverse. */
/**
 * 
 * @param {string} str 
 */
function revString(str) {
  if (str.length === 0) return '';
  return str[str.length - 1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const values = []
  Object.values(obj).forEach(val => {
    if (typeof val === 'string') {
      values.push(val)
    } else if (typeof val === 'object') {
      values.push(...gatherStrings(val))
    }
  })
  return values
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (arr.length === 0) return -1 
  const mid = Math.floor(arr.length / 2)
  if (arr[mid] === val) return mid

  if (arr[mid] > val) {
    
    const left = binarySearch(arr.slice(0, mid), val)
    return left >= 0 ? left : -1
  } 

  const right = binarySearch(arr.slice(mid + 1), val)
  return right >= 0 ? right + mid + 1 : -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
