/** Strings */

/** Creation */

/**   Strings can be created through 3 types of delimiters: */

let str1 = "Hello, world!"; // Single quotes
let str2 = "Hello, world!"; // Double quotes
let str3 = `Hello, world!`; // Template literal

/** length */

let strA = "Hello";
console.log("string length====>", strA.length); // 5

/** Accessing */

// Bracket Notation
let strB = "Hello";
console.log("bracket index 0 ========>", strB[0]); // 'H'
console.log("bracket index 1========>", strB[1]); // 'e'

// charAt(index)
let str = "Hello";
console.log("char at index 0========>", str.charAt(0)); // 'H'
console.log("char at index 4========>", str.charAt(4)); // 'o'
/** If index is out of range i.e if not between 0 to str.length - 1 , then empty string is returned */

// at(index)
console.log("at()====>", str.at(-1));// o this method allows negative index

// charCodeAt()


/** Concatenation */

// + operator
let strC = "Hello";
let strD = "World";
let resultForPlus = strC + " " + strD; // Concatenate with a space
console.log("strC and strD ===================>", resultForPlus); // 'Hello World'

// concat()
let strE = "Hello";
let strF = "World";
let resultForMethod = str1.concat(" ", str2); // Concatenate with a space
console.log("strE and strF ===================>", resultForMethod); // 'Hello World'

/** toUpperCase() */

let strG = "hello";
console.log("converted to uppercase=======>", strG.toUpperCase()); // 'HELLO'

/** toLowerCase() */

let strH = "HELLO";
console.log("converted to lowercase=======>", strH.toLowerCase()); // 'hello'

/** Whitespace removal methods */

// trim()
let strI = "   Hello World   ";
console.log("trim()======>", strI.trim()); // 'Hello World'

// trimStart()
let strJ = "   Hello World   ";
console.log("trimStart()======>", strJ.trimStart()); // 'Hello World   '

// trimEnd()
let strK = "   Hello World   ";
console.log("trimEnd()======>", strK.trimEnd()); // '   Hello World'

/** String Search Methods */

// indexOf(): // returns first occurence of the string
let strL = "Hello World World";
console.log("indexOf()======>", strL.indexOf("World")); // 6
console.log("indexOf()======>", strL.indexOf("world")); // -1 (case-sensitive)

// lastIndexOf(): // returns last occurence of the string
let strM = "Hello World World";
console.log("lastIndexOf()======>", strM.lastIndexOf("World")); // 12
console.log("lastIndexOf()======>", strM.lastIndexOf("world")); // -1 (case-sensitive)

// includes(): // returns true if the specified substring, otherwise false
let strN = "Hello World";
console.log("includes ========>", strN.includes("World")); // true
console.log("includes ========>", strN.includes("world")); // false (case-sensitive)

// startsWith(): // checks if a string starts with the specified substring
let strO = "Hello World";
console.log("startsWith()======>", strO.startsWith("Hello")); // true
console.log("startsWith()======>", strO.startsWith("World")); // false

// endsWith(): // checks if a string ends with the specified substring
let strP = "Hello World";
console.log("endsWith()======>", strP.endsWith("Hello")); // false
console.log("endsWith()======>", strP.endsWith("World")); // true

/** String extraction methods */

// slice():
let strQ = "Slicing It";
console.log("slice()=====>", strQ.slice(0, 5)); // 'Slici' (starts at index 0, ends before index 5)
console.log("slice()=====>", strQ.slice(-5)); // 'ng It' (negative index counts from the end)
/**
 * start:
 *    if negative, it counts from end
 *    if startIndex > endIndex empty string returned.
 *    if startIndex > stringLength empty string returned.
 * end:
 *    if not specified slices till the end.
 *    if endIndex < start string returned.
 */

// substring():
let strR = "Great to see you again!";
console.log("substring()======>", strR.substring(-1, 5)); // 'Great'
console.log("substring()======>", strR.substring(5, 0)); // 'Hello' (swaps indices)
/**
 * start:
 *    if start > end then indices are swapped.
 *    if start < end but < 0 then start index is 0
 * end:
 *    if not specified extracts till the end.
 */

/** String replacement methods */

//replace(pattern, replacement);
console.log("replace()======>", strQ.replace(/i/, "D")); // SlDcing it
//replace(pattern with global if regExp, replacement);
console.log("replaceAll()====>", strQ.replaceAll(/i/g, "Z")); // SlZcZng It (case-sensitive)
/**
 *  replace:
 *    If pattern is string, first occurence is only replaced.
 *    If pattern is regExp without /g flag only first occurence is replaced
 *  replaceAll:
 *    can't be used without global flag for regExp.
 */

/** String splitting */

// split(separator, limit):
let fruits = "apple,banana,orange";
let splittedFruits = fruits.split(",", 2);
console.log("splittedFruits======>", splittedFruits); // ['apple', 'banana', 'orange']
/**
 * if separator is ommited, the entire string is returned as a single element array.
 * if separator is not found, the entire string is returned as a single element array.
 * if separator is an empty, the each character in a string are separate elements in the result.
 * separator can also be a regExp.
 * limit is optional
 * result will include max. of limit if specified
 */

/** Padding methods */

let strS = "5";
//padStart(targetLength, padString) // adds padding to the beginning  
console.log("padStart======>",strS.padStart(3, "0")); // '005'
//padEnd(targetLength, padString) // adds padding to the end
console.log("padEnd======>",strS.padEnd(3,'0')); // '500'
/**
 * If padString not provided then single space will be considered as padString
 * If emptyString then original string will be returned
 */

/** Escape sequences in strings */

/**
 * Escape sequences are used with string literals to tell JS to interpret the string differently
 * They are useful when dealing with:
 *    Special characters like newlines, tabs, quotes, and backslashes.
 *    Characters that cannot be typed directly in a string (like Unicode characters).
 *    Formatting strings for certain purposes (e.g., JSON, regular expressions).
 */

console.log("singleQuote====>",'It\'s a test'); // Used to escape single quote in string enclosed by single quotes
console.log("doubleQuote=====>", "He said, \"Hello!\""); // to escape double quotes
console.log("backslash=======>", "C:\\Windows\\System32"); // to escape backslash
console.log("newline=========>", "Hello\nWorld"); // to insert new line
const carr = "First\rSecond";
console.log("carriage return=======>", carr); // moves the cursor to start of line // not working as expected
console.log("",); // 