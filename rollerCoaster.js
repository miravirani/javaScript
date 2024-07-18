function rollerCoasterRide() {
    let peopleQueue = [1, 6, 8, 2, 1, 4];
    const rideCapacity = 9;
    const ridesPerDay = 4;
    const ticketRate = 1;

    let totalIncome = 0;

    for (let i = 0; i < ridesPerDay; i++) {
        let currentRideCapacity = rideCapacity;
        let groupToBoard = [];
        let rideIncome = 0;

        while (peopleQueue.length > 0 && peopleQueue[0] <= currentRideCapacity) {
            let group = peopleQueue.shift();
            groupToBoard.push(group);
            currentRideCapacity -= group;
            rideIncome += group * ticketRate;
        }

        totalIncome += rideIncome;

        peopleQueue.push(...groupToBoard);
    }

    console.log(`Total Income: ${totalIncome} euros`);
}

rollerCoasterRide();
