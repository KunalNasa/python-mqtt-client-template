import { Text } from "@asyncapi/generator-react-sdk";

export function InitializeBroker ({asyncapi, params}) {
    return (
        <Text newLines={2}>mqttBroker = "{asyncapi.servers().get(params.server).host()}"
        </Text>
    )
}