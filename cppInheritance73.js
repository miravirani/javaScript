// cpp program 73
// WAP to create user defined manipulators

class Manipulator {
    constructor() {}

    apply(input) {
        return input;
    }
}

class CapitalizeFirstLetter extends Manipulator {
    constructor() {
        super();
    }

    apply(input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
}

class AddPrefix extends Manipulator {
    constructor(prefix) {
        super();
        this.prefix = prefix;
    }

    apply(input) {
        return this.prefix + input;
    }
}

let manipulator1 = new CapitalizeFirstLetter();
let manipulator2 = new AddPrefix("ID-");

let name = "john";
console.log("Manipulated Name:", manipulator1.apply(name));

let number = "123";
console.log("Manipulated Number:", manipulator2.apply(number));
