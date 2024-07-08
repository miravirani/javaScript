// cpp program 53
// Define a helper function to find the minimum of three numbers

class Numbers {
    constructor(num1, num2, num3) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }

    minimum() {
        if (this.num1 <= this.num2 && this.num1 <= this.num3) {
            console.log("num1 is min");
        } else if (this.num2 <= this.num1 && this.num2 <= this.num3) {
            console.log("num2 is min");
        } else {
            console.log("num3 is min");
        }
    }
}

const numbers = new Numbers(5, 3, 7);
numbers.minimum();