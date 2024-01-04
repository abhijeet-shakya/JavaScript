const accountId = 1234;
let accountEmail = "abhi@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi";
let accountState;
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "jeet@gmail.com";

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
