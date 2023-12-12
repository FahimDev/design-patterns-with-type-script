abstract class Car {
    public description!: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

abstract class CarOptions extends Car {
    private decoratedCar!: Car;
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