// REGULAR EXPRESSION   
// to find a specific pattern 
// this is regular expression lateral   /malik/ and we will match the pattern in string and malik is source 
// Functions to match regular expression
const reg=/thi?s/;
let s="ths is great coder malik the legend of pubg mobile  malik is malik because ";
// 1) exec() - this function will return array or null
console.log(reg.exec(s));
// const reg=/malik/g- g for global if we have two or more malik in a string it will match first then sec and so on .
// const /malik/i - case in sensitive
// test() - return True or Flase  

// match() - return array of results  or null -->it take one parameter which is pattern to find
// string.match(pattern);
// serach() - returns index of first match or -1
// replace() -returns new replaced string with all replacements
// string.replace(pattern,'pattern for updation and replacement')


// operators in regular expression 
// Meta charactor symbol
// 1) ^ start with  -->starting of string 
// /^ma/;

// 2)$ used for ends with -->end of string 
// /malik$/

// 3). means any charactor inplace of.
// /m.lik/

// 4)* 0 or more charactor 
// /m*k/

// 5) ? means option , if it is present after charactor the charactor will be optional means if present or not both will return true 

// 6)\ used for to remove the metacharactor quality of operator and it will act the real charactor
// /m\*lik/




// CHARACTOR SET 
//1).  /m[a-z]lik/  -->from a to z what ever the reg will match with the string 
// OR
// if we have [dhv] -->if there is d h v then reg will match 
let regex1=/m[a-z]lik/; 
let string2="malik bhai";
console.log(regex1.exec(string2));
// 2).[^dhv] --> in charactor set ^ used for not 

//3) /m[a-zA-Z]lik/   for both capital and small letters
// 4)/m[ab0-9]lik/    there also integer in charactor set


// QUANTIFIERS
// set quantity of any charactor 
// 5)  /ma{2}/ ; //{} quantity of a means a should be 2 times

// 6)  /ma{0,2}lik/ means if string contain maalik ||mlik it will match ||malik (0-2,means 0,1,2) or as a range



// GROUPINGS
// we use paranthesis
/(mal){2}/ ; // means mal should be two times in string


// SHORTHAND CHARACTOR CLASSES
// 1)\w
/\w lik/; //word charactor _,aplphabets,0-9 ,if;
// 2)if we want more than one charactor then \w+
// 3)\W for non word charactor
// 4) \d for digit 
// 5)\D for non digit
// 6) \s for space and \t
// 7)\S for none white space 
// 8)\b for word boundary means /malik\b/  there will be next word then \b will match 

// ASSERTIONS 
// /h(?=y)/ //there should be y after h and
// /h(?!y)/ //other than y 
const re4=/\wha/;
let str4="malik is a good aaaryarrarry"
console.log(re4.exec(str4));








