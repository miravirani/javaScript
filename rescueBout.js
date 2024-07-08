const boatCapacity = 5
let men = 1
let women = 4
let children = 18

let boatMen = 0
let boatWomen = 0
let boatChildren = 0


while (boatMen + boatWomen + boatChildren < boatCapacity) {
    if (men === 0) {

        console.log(`Men on board: ${boatMen}`)
        console.log(`Women on board: ${boatWomen}`)
        console.log(`Children on board: ${boatChildren}`)
        return

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
        if (women > 0 && boatMen > 0 && boatMen + boatWomen + boatChildren < boatCapacity) {
            for (let i = 0; i < 2; i++) {
                women--
                boatWomen++
                for (let i = 0; i < 4; i++) {
                    if (children > 0 && boatMen + boatWomen + boatChildren < boatCapacity) {
                        boatChildren++
                        children--
                    }
                }
            }

        }
    }

}

console.log(`Men on board: ${boatMen}`)
console.log(`Women on board: ${boatWomen}`)
console.log(`Children on board: ${boatChildren}`)