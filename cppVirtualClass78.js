
// cpp program 78
// WAP to demonstrate the use of pure virtual function

class VirtualClass {
    constructor() {
        if (new.target === VirtualClass) {
            // throw new TypeError("Cannot construct Abstract instances directly");
        }
    }

    pureVirtualFunction() {
        throw new Error("pureVirtualFunction() must be implemented in derived classes");
    }
}

class DerivedClass extends VirtualClass {
    constructor() {
        super();
    }

    pureVirtualFunction() {
        console.log("pureVirtualFunction is implemented in DerivedClass");
    }
}

try {
    
    const abstractInstance = new VirtualClass(); 
} catch (e) {
    console.error(e.message);
}

try {

    const derivedInstance = new DerivedClass();
    derivedInstance.pureVirtualFunction(); 
} catch (e) {
    console.error(e.message);
}

try {
    
    class AnotherDerivedClass extends VirtualClass {
        constructor() {
            super();
        }
    }

    const anotherDerivedInstance = new AnotherDerivedClass();
    anotherDerivedInstance.pureVirtualFunction(); 
} catch (e) {
    console.error(e.message);
}
