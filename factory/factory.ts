interface IAutomobile {
  start(): void;
  stop(): void;
}

// Concrete class for Sedan
class Sedan implements IAutomobile {
  start(): void {
    console.log("Sedan is starting....");
  }

  stop(): void {
    console.log("Sedan is stopping.....");
  }
}

// Concrete class for SUV
class SUV implements IAutomobile {
  start(): void {
    console.log("SUV is starting....");
  }
  stop(): void {
    console.log("SUV is stopping....");
  }
}

// Concrete class for Automobile Factory
class AutomobileFactory {
  private automobileTypes: { [key: string]: new () => IAutomobile } = {
    sedan: Sedan,
    suv: SUV,
  };

  createAutomobile(vehicleType: string): IAutomobile | null {
    const AutoMobileClass = this.automobileTypes[vehicleType.toLowerCase()];
    if (AutoMobileClass) {
      return new AutoMobileClass();
    } else {
      console.log("Automobile Type Unknown.");
      return null;
    }
  }
}

const factory = new AutomobileFactory();
const toyotaCorolla = factory.createAutomobile("sedan");

if (toyotaCorolla) {
  toyotaCorolla.start();
  toyotaCorolla.stop();
}

const toyotaHilux = factory.createAutomobile("suv");

if (toyotaHilux) {
  toyotaHilux.start();
  toyotaHilux.stop();
}

// This will log an error message.
const invalidAutomobile = factory.createAutomobile('bike');