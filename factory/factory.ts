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

