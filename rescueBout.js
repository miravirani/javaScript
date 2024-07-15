const boatCapacity = 40
let men = 3
let women = 5
let children = 25

let boatMen = 0
let boatWomen = 0
let boatChildren = 0

while (boatMen + boatWomen + boatChildren < boatCapacity) {
    if (men === 0) {
        break
    }

    if (men > 0 && boatMen + boatWomen + boatChildren < boatCapacity) {
        men--
        boatMen++

        for (let i = 0; i < 4; i++) {
            if (children > 0 && boatMen + boatWomen + boatChildren < boatCapacity) {
                boatChildren++
                children--
            }
        }

        if (women > 0 && boatMen + boatWomen + boatChildren < boatCapacity) {
            for (let i = 0; i < 2; i++) {
                if (women > 0 && boatMen + boatWomen + boatChildren < boatCapacity) {
                    boatWomen++
                    women--
                    
                    for (let j = 0; j < 4; j++) {
                        if (children > 0 && boatMen + boatWomen + boatChildren < boatCapacity) {
                            boatChildren++
                            children--
                        }
                    }
                }
            }
        }
    }
}

console.log(`Men on board: ${boatMen}`)
console.log(`Women on board: ${boatWomen}`)
console.log(`Children on board: ${boatChildren}`)
