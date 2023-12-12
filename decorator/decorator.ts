abstract class Car {
    public description!: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}