var dt = new Date();
var currentYear = dt.getFullYear();
var birthyear= prompt('enter year of birth');
var age = currentYear - birthyear;

alert("you are" + age + "years old");