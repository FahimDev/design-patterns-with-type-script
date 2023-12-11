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
  

