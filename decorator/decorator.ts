abstract class Car {
    public description!: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

abstract class CarOptions extends Car {
    decoratedCar!: Car;
    public abstract getDescription(): string;
}

// ----- CAR -----

class ModelS extends Car {
    public description = "Model S";
    public getDescription(): string {
        return this.description;
    }

    public cost(): number {
        return 70000;
    }
}

class ModelX extends Car {
    public description = "Model X";
    public getDescription(): string {
        return this.description;
    } 

    public cost(): number {
        return 60000;    
    }
}

// ----- OPTIONS -----

class AutoDrive extends CarOptions {
    constructor(carInstance: Car) {
        super();
        this.decoratedCar = carInstance;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + " Enhanced Auto Driving. ";
    }

    public cost(): number {
        return this.decoratedCar.cost() + 1000;
    }
}

class AirSuspension extends CarOptions {
    constructor(carInstance: Car) {
        super();
        this.decoratedCar = carInstance;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + " Smart Air Suspension ";
    }

    public cost(): number {
        return this.decoratedCar.cost() + 800;
    }
}

class SentryMode extends CarOptions {
    constructor(carInstance: Car) {
        super();
        this.decoratedCar = carInstance;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + " Sentry Mode Monitoring ";
    }

    public cost(): number {
        return this.decoratedCar.cost() + 300;
    }
}

// ----- Configure Tesla -----

let officeTesla = new ModelS();
console.log("Office Car Description", officeTesla.getDescription());
console.log("Office Car Price: ", officeTesla.cost());
console.log("--------------------");
let personalTesla = new ModelX();
console.log("Personal Car Description", personalTesla.getDescription());
console.log("Personal Car Price: ", personalTesla.cost());
console.log("----------Customizing----------");
personalTesla = new AirSuspension(personalTesla);
console.log("Personal Car Description", personalTesla.getDescription());
console.log("Personal Car Price: ", personalTesla.cost());
personalTesla = new SentryMode(personalTesla);
personalTesla = new AutoDrive(personalTesla);
console.log("----------Customizing----------");
console.log("Personal Car Description", personalTesla.getDescription());
console.log("Personal Car Price: ", personalTesla.cost());