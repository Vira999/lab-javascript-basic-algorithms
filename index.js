console.log(`I am ready`);


let hacker1 = 'Lloyd';
console.log ("The driver's name is " + hacker1);

let hacker2 = 'Ines';
console.log ("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker1.length === hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

let newDriversName = " ";
for(let i=0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1.toUpperCase());

let newNavigatorsName = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorsName += hacker2[i];
}
console.log(newNavigatorsName);


if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 
//bonus 1//

let text = `is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book.
 It has survived not only five centuries, but also the leap into electronic typesetting, 
 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
 sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
 Aldus PageMaker including versions of Lorem Ipsum.`;
 let countWords = 0;
let etCount = 0;

let splittedText = text.split(' ');

for (let i=0; i < splittedText.length; i++) {
  if(text.trim().split(/\s+/).includes('\n').length) {
    countWords++
  } else if(splittedText[i] === "et" || splittedText[i] === "et.") {
    etCount++;
  }
  countWords++;
 }

console.log('words -->', countWords);
console.log('et count  -->', etCount);

//bonus 2//

 let phraseToCheck = "Was it a car or a cat I saw?";
 phraseToCheck  = phraseToCheck.replace(/\s/g, "").toUpperCase();

 let reversedphraseToCheck = phraseToCheck.split('').reverse().join('');
  
if (phraseToCheck === reversedphraseToCheck) {
  console.log('Text is a palindrome');
}
else {
  console.log('Text is not a palindrome');
}





