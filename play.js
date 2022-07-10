
let range = parseInt(prompt("Enter max number of rang: "));
let i = 0;
let gusse = Math.ceil((range - 1) * Math.random() + 1);
let user = null;
if (isNaN(range)) {
    console.log("Invalid Character... Game Over :(");
} else {

    while (range >= 2 ** i) {
        i++;
    } console.log("you can gusse the number", i, "times in range of 1 ," + range);

    for (let step = 0; step < i; step++) {
        user = parseInt(prompt("Enter your gusse", step + 1, ":"));
        if (gusse > user) {
            console.log(step + 1, "st step:");
            console.log("More than:", user);
        } else if (gusse < user) {
            console.log(step + 1, "st step:");
            console.log("Less than:  ", user);
        } else if (gusse === user) {
            console.log("You gussed", user, "right.");
            console.log("Good Job :)");
            break
        }
        if (step === i - 1) {
            console.log("Game Over. The computer gussed: ", gusse);
        }
    }
}