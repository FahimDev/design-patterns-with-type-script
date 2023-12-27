// Define a strategy interface for communication
interface CommunicationStrategy {
  send(data: any): void;
}

// Concrete implementation of a communication strategy using MQTT protocol
class MqttCommunicationStrategy implements CommunicationStrategy {
  send(data: any): void {
    console.log(`Sending data via MQTT: ${JSON.stringify(data)}`);
  }
}

// Concrete implementation of a communication strategy using HTTP protocol
class HttpCommunicationStrategy implements CommunicationStrategy {
  send(data: any): void {
    console.log(`Sending data via HTTP: ${JSON.stringify(data)}`);
  }
}

// Concrete implementation of a communication strategy using WebSocket (WSS) protocol
class WssCommunicationStrategy implements CommunicationStrategy {
  send(data: any): void {
    console.log(`Sending data via WSS: ${JSON.stringify(data)}`);
  }
}

// CONTEXT class representing an IoT device
class IoTDevice {
  private communicationStrategy: CommunicationStrategy;

  constructor(communicationStrategy: CommunicationStrategy) {
    this.communicationStrategy = communicationStrategy;
  }

  // Set a new communication strategy at runtime
  setCommunicationStrategy(communicationStrategy: CommunicationStrategy) {
    this.communicationStrategy = communicationStrategy;
  }

  // Send data using the current communication strategy
  sendData(data: any) {
    this.communicationStrategy.send(data);
  }
}


const payload: any = {
    'doorLock': false,
    'bonnetLock': true,
    'trunkLock': true
}

// Toyota Lock Device uses HTTP as default strategy
const toyotaLockDevice = new IoTDevice(new HttpCommunicationStrategy());

// Sending data in HTTP Protocol
toyotaLockDevice.sendData(payload);

// Toyota Lock Device changing strategy into MQTT
toyotaLockDevice.setCommunicationStrategy(new MqttCommunicationStrategy());

// Sending data in MQTT Protocol
toyotaLockDevice.sendData(payload);

// Honda Lock Device uses WSS as default strategy
const hondaLockDevice = new IoTDevice(new WssCommunicationStrategy());

// Sending data in WSS Protocol
hondaLockDevice.sendData(payload);


