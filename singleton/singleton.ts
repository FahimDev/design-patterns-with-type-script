class CarEngine {
  private static instance: CarEngine | null = null;
  private engineModel: string;
  private isRunning: boolean = false;

  // Constructor is private in Singleton Pattern
  private constructor(engModel: string) {
    this.engineModel = engModel;
  }

  public static getInstance(engModel: string): CarEngine {
    if (!CarEngine.instance) {
      CarEngine.instance = new CarEngine(engModel);
    }
    return CarEngine.instance;
  }

  public getDetails(): string {
    if (this.isRunning) {
        return `The Engine ${this.engineModel} is running.`
    } else {
        return `The Engine ${this.engineModel} is off.`
    }
  }

  public start(): void {
    if (!this.isRunning) {
      console.log("Engine started.");
      this.isRunning = true;
    } else {
      console.log("Engine is already running.");
    }
  }

  public stop(): void {
    if (this.isRunning) {
      console.log("Engine stopped.");
      this.isRunning = false;
    } else {
      console.log("Engine is already stopped.");
    }
  }
}


// Creating instance using the Singleton pattern
const firstIgnition = CarEngine.getInstance("VVT-i");
/* As firstIgnition has created an instance as VVT-i 
secondIgnition will not have a new instance (VTEC). */
const secondIgnition = CarEngine.getInstance("VTEC");

// Both of these will print same Engine Model from same Instance.
console.log(firstIgnition.getDetails());
console.log(secondIgnition.getDetails());

// Both instances refer to the same object
console.log("Singleton Pattern: ", firstIgnition === secondIgnition); // true

// Starting the secondIgnition
secondIgnition.start();
// Will also cause the starting of the firstIgnition
firstIgnition.start();
// Stopping the firstIgnition also causes 
firstIgnition.stop();
// The same for secondIgnition
secondIgnition.stop();
// As all of these are from a Single instance.
