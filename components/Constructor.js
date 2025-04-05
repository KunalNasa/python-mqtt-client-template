import { Text } from "@asyncapi/generator-react-sdk";

export function Constructor() {
    return (
        <Text indent={2} newLines={2}>
            {`def __init__(self):
            self.client = mqtt.Client()
            self.client.connect(mqttBroker)`}
        </Text>
    )
}