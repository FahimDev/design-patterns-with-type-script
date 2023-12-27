// Define a strategy interface for communication
interface CommunicationStrategy {
  send(data: any): void;
}

// Concrete implementation of a communication strategy using MQTT protocol
class MqttCommunicationStrategy implements CommunicationStrategy {
  send(data: any): void {
    console.log(`Sending data via MQTT: ${data}`);
  }
}

// Concrete implementation of a communication strategy using HTTP protocol
class HttpCommunicationStrategy implements CommunicationStrategy {
  send(data: any): void {
    console.log(`Sending data via HTTP: ${data}`);
  }
}

// Concrete implementation of a communication strategy using WebSocket (WSS) protocol
class WssCommunicationStrategy implements CommunicationStrategy {
  send(data: any): void {
    console.log(`Sending data via WSS: ${data}`);
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
