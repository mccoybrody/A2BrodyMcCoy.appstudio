//This is setting variables so that the user is prompted to type in their information.
let name = prompt("Please enter your first name.")
let state = prompt("Please enter your state. (2 letters, capitalized eg. NE)")
let temp = prompt("Please enter the current outside temperature (F).")

//This sets up a conditional statement that logs to the console different messages based on what the users write.  
if (state == "NE" && temp < '32') {
        console.log(`${name}, wear a warm coat, hat, scarf and gloves.`)
    } else if (state == "NE" && temp >='32' && temp <='50') {
        console.log(`${name}, wear a warm coat but you won't need a hat, scarf or gloves.`)
    } else if (state == "FL" && temp >='32' && temp <='50')  {
        console.log(`${name}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`)
    } else if (state == "FL" && temp >='50' && temp <='70')  {
        console.log(`${name}, wear a warm coat, hat and gloves. Maybe a scarf too.`)
    }











