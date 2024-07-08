const boatCapacity = 10;
let men = 2;
let women = 4;
let children = 20;

let boatMen = 0;
let boatWomen = 0;
let boatChildren = 0;

while (boatMen + boatWomen + boatChildren < boatCapacity) {
    // Board men and their children
    while (men > 0 && boatMen + boatWomen + boatChildren < boatCapacity) {
        men--;
        boatMen++;

        // Each man can bring up to 4 children
        for (let i = 0; i < 4; i++) {
            if (children > 0 && boatMen + boatWomen + boatChildren < boatCapacity) {
                boatChildren++;
                children--;
            }
        }
    }
    // if (men === 0) {
    //     break;
    // }

    // Board one woman and her children (only if there are men on board)
    if (women > 0 && boatMen > 0 && boatMen + boatWomen + boatChildren < boatCapacity) {
        women--;
        boatWomen++;

        // Each woman can bring up to 4 children
        for (let i = 0; i < 4; i++) {
            if (children > 0 && boatMen + boatWomen + boatChildren < boatCapacity) {
                boatChildren++;
                children--;
            }
        }
    }

    // Exit the loop if no more people can board
    if (men === 0 ) {
        break;
    }
}

console.log(`Men on board: ${boatMen}`);
console.log(`Women on board: ${boatWomen}`);
console.log(`Children on board: ${boatChildren}`);
