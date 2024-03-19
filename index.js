// Code your solutions in this file
function writeCards(namesArray, eventName) {
    const messages = [];
    for (let i = 0; i < namesArray.length; i++) {
        console.log(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
        messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number) {
    
    while (number >= 0) {
        console.log(number--);
    }
}
