interface FuelVehicle {
  refillFuel(): void;
}

interface CNGVehicle {
  refillCNG(): void;
}

// Fuel Vehicle Implementation
class Toyota implements FuelVehicle {
  refillFuel() {
    console.log("Refilling octane in oil tank.....");
  }
}

// CNG Vehicle Implementation
class BajajAutoRickshaw implements CNGVehicle {
  refillCNG() {
    console.log("Refilling CNG in gas tank.....");
  }
}

// Adapter Pattern
class FuelToCNGAdapter implements FuelVehicle {
  cngVehicle: CNGVehicle;

  constructor(cngInstance: CNGVehicle) {
    this.cngVehicle = cngInstance;
  }

  refillFuel(): void {
    console.log("Want to Run on CNG? Converting.....");
    this.cngVehicle.refillCNG();
  }
}

let corolla = new Toyota();
let babyTaxi = new BajajAutoRickshaw();
let corollaCNGAdapter = new FuelToCNGAdapter(babyTaxi);

corollaCNGAdapter.refillFuel();
corolla.refillFuel();
babyTaxi.refillCNG();
