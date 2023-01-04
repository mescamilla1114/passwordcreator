// Assignment Code
// start counter
var count = 0;
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var plength = prompt("Please enter password length beween 8 and 128", "enter length");
  while ((plength <8 || plength > 128) || isNaN(plength)) {
    alert("please enter a number between 8 and 128");
    var plength = prompt("Please enter password length beween 8 and 128", "enter length");
  } 
  var charbank1 = [];
  var charbank2 = [];
  var charbank3 = [];
  var charbank4 = [];
  var charbank5 = [];
  var globbank = []

      var upper = confirm("Would you like to include uppercase letters?");

    if (upper === true)
    {
      count ++;
      var upperalpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      charbank2= charbank1.concat(upperalpha);
      console.log(charbank2);
      var lower =confirm("Would you like to include lowercase letters?");
    }

    else{
      var lower =confirm("Would you like to include lowercase letters?");
      charbank2 = charbank1;
    }

    if(lower === true){
      count ++;
      var loweralpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
      charbank3= loweralpha.concat(charbank2);
      console.log(charbank3);
      var specialc =confirm("Would you like to include special characters?");
    }

  else{
    var specialc =confirm("Would you like to include special characters?");
    charbank3= charbank2;
    console.log(charbank3);
  }

  if(specialc === true){
    count ++;
    var charspecial = '!@#$%^&*(),./<>?;:`~[]{}=+'.split('');
    charbank4 = charspecial.concat(charbank3);
    console.log(charbank4);
    var numeric =confirm("Would you like to include numbers?");
  }

  else{
    var numeric =confirm("Would you like to include numbers?");
    charbank4= charbank3;
  }

  if(numeric ===true){
    count ++;
    var numberinc = '01234567899876543210098765'.split('');
    charbank5 = charbank4.concat(numberinc);
    console.log(charbank5);
    alert("Your password is being created");
  }

  else{
    charbank5 = charbank4;
    alert("Your password is being created");
  }

  for (let i = charbank5.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = charbank5[i];
    charbank5[i] = charbank5[j];
    charbank5[j] = k;
  }

  if (charbank5.length > plength){
    while (charbank5.length > plength) {
      charbank5.pop();
    }
    console.log('short while', charbank5)
  }

  else if (charbank5.length < plength){
    while (charbank5.length < plength) {
      charbank5.push(charbank5[Math.floor(Math.random()*charbank5.length)]);
    }
    console.log('long while', charbank5);
  }

  else if (charbank5[0] == "undefined"){
    alert("You did not select any categories. Please try again.");
  }

else {
 for (let i = charbank5.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = charbank5[i];
  charbank5[i] = charbank5[j];
  charbank5[j] = k;
}}



console.log(charbank5);
// charbank5.sort(function(){return 0.5 - Math.random()});
 
  var password = charbank5.join("");
  var passwordText = document.querySelector("#password");

 passwordText.value = password;
 console.log('passwordtext',passwordText);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//must return a string
//prompt user to choose num between 8-128
//validate amount and actual num
//confirm prompt upper, lower, special, num
  //can I do one prompt with check boxes?
//4 vars for each category which are an array of strings [a,b,c,d,...]
//select randoms from each category
//validate if there is at least 1 element from each desired category
//can I mashup random characters of length 128 and cut down, then check if each category is represented?
