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


