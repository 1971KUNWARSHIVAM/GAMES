const e = prompt("PRESS 1 TO CONTINUE PLAYING OR PRESS 2 OR QUIT TO QUIT OR PRESS 3 TO READ THE INSTRUCTIONS ON THE PAGE   ");
if (e == 1) {
    const max = prompt("ENTER THE MAXIMUM NO. YOU HAVE ONE MORE CHANCE TO QUIT. ENTER QUIT TO QUIT");
    const random = Math.floor(Math.random() * max) + 1;
    let guess = prompt("GUESS THE NO:");

    while (true) {
        if (guess==="QUIT") {
            console.log("USER QUIT");
            alert("USER QUIT");
            break;
        }

        else if (guess == random) {
            alert(`YOU ARE RIGHT! CONGRATS!! RANDOM NO WAS ${random}`);
            console.log(`YOU ARE RIGHT! CONGRATS!! RANDOM NO WAS ${random}`);
            break;
        } else {
            if (guess > random) {
                guess = prompt("HINT: THE NO YOU GUESSED WAS TOO LARGE! TRY WITH A SMALLER ONE");
            } else if (guess < random) {
                guess = prompt("HINT: THE NO YOU GUESSED WAS TOO SMALL! TRY WITH A LARGER ONE");
            }
        }
    }
} else if (e == 2) {
    console.log("USER QUIT");
    alert("USER QUIT");
} else if (e==3) {
    console.log("READ THE INSTRUCTIONS CAREFULLY");
    alert("READ THE INSTRUCTIONS CAREFULLY");
} else {
    guess = prompt("WRONG INPUT! INPUT CORRECTLY:");
}
