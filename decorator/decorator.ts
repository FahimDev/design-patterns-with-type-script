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