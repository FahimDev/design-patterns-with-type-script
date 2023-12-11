interface FuelVehicle {
  refillFuel();
}

interface CNGVehicle {
  refillCNG();
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


