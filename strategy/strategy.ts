// Define a strategy interface for communication
interface CommunicationStrategy {
  send(data: string): void;
}

// Concrete implementation of a communication strategy using MQTT protocol
class MqttCommunicationStrategy implements CommunicationStrategy {
  send(data: string): void {
    console.log(`Sending data via MQTT: ${data}`);
  }
}

// Concrete implementation of a communication strategy using HTTP protocol
class HttpCommunicationStrategy implements CommunicationStrategy {
  send(data: string): void {
    console.log(`Sending data via HTTP: ${data}`);
  }
}


