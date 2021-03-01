//This is setting variables so that the user is prompted to type in their information. 
let name2 = prompt("Please enter your first name.")
let state2 = prompt("Please enter your state. (2 letters, capitalized eg. NE)")
let temp2 = prompt("Please enter the current outside temperature (F).")

//This is setting up the switch messages to return certain sentences to users based on what they input. 
let text = [
    `${name2}, wear a warm coat, hat, scarf and gloves.` ,
    `${name2}, wear a warm coat but you won't need a hat, scarf or gloves.` ,
    `${name2}, wear your warmest coat, a warm hat, a scarf, and warm gloves.` ,
    `${name2}, wear a warm coat, hat and gloves. Maybe a scarf too.` ,
    "Hey, that didn't seem to work, please try again."
]       

//This is the switch statement that outputs the messages from the previous step to the console.assert(expression) 
switch (true) {
  case state2 == "NE" && temp2 < 32:
    console.log(text[0])
    break
  case state2 == "NE" && temp2 >=32 && temp2 <=50:
    console.log(text[1])
    break 
  case state2 == "FL" && temp2 >=32 && temp2 <=50:
    console.log(text[2])
    break
  case state2 == "FL" && temp2 >=50 && temp2 <=70:
    console.log(text[3])
    break  
  default:
    console.log(text[4])
}