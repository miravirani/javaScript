function simulateBallProcess(blackBalls, whiteBalls) {
    let step = 1
    const steps = []

    function formatState(black, white) {
        let state = ''
        for (let i = 0; i < black; i++) {
            state += 'b'
        }
        for (let i = 0; i < white; i++) {
            state += 'w'
        }
        return state
    }

    steps.push(`step${step}[${formatState(blackBalls, whiteBalls)}]`)

    while (blackBalls + whiteBalls > 1) {
        let currentStates = []

        if (blackBalls >= 2) {
            currentStates.push(`${formatState(blackBalls - 2, whiteBalls + 1)}`)
        }
        if (whiteBalls >= 2) {
            currentStates.push(`${formatState(blackBalls - 2, whiteBalls + 1)}`)
        }
        if (blackBalls >= 1 && whiteBalls >= 1) {
            currentStates.push(`${formatState(blackBalls - 1 + 1, whiteBalls - 1)}`)
        }

        step += 1
        steps.push(`step${step}[${currentStates.join(', ')}]`)

        if (blackBalls >= 2) {
            blackBalls -= 2
            whiteBalls += 1
        } else if (whiteBalls >= 2) {
            whiteBalls -= 2
            whiteBalls += 1
        } else if (blackBalls >= 1 && whiteBalls >= 1) {
            blackBalls -= 1
            whiteBalls -= 1
            blackBalls += 1 
        }
    }

    const finalState = blackBalls === 1 ? 'Black' : whiteBalls === 1 ? 'White' : 'Undefined'
    steps.push(`Final state: ${finalState}`)
    console.log(`\nThe last remaining ball is: ${finalState}`)

    return steps
}

const blackBall = 3
const whiteBall = 2
const steps = simulateBallProcess(blackBall, whiteBall)
steps.forEach(step => console.log(step))

// // function simulateBallProcess() {

// //     let blackBall = 3
// //     let whiteBall = 2
    
// //     while ((blackBall + whiteBall) > 1) {

// //         if (blackBall > 1) {
// //             blackBall -= 2
// //             whiteBall += 1

// //         } else if (whiteBall > 1) {
// //             whiteBall -= 2
// //             whiteBall += 1

// //         } else {
// //             blackBall -= 1
// //             whiteBall -= 1
// //             blackBall += 1
// //         }
// //     }
    
// //     if (blackBall === 1) {
// //         return 'Black'
// //     } else {
// //         return 'White'
// //     }
// // }

// // let result = simulateBallProcess()
// // console.log(`The last remaining ball is: ${result}.`)