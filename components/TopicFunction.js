import { Text } from "@asyncapi/generator-react-sdk";

export function TopicFunction({ operations, channels }) {
  const topicsDetails = getTopics(operations, channels);
  
  let functions = topicsDetails.map((t) => 
      `def send${t.name}(self, id):\n` +
      `    topic = "${t.topic}"\n` +
      `    self.client.publish(topic, id)`
  ).join("\n\n");

  return (
    <Text newLine={1} indent={2}>
      {functions}
    </Text>
  );
}

/*
* Extracts necessary details from operations and channels.
*/
function getTopics(operations, channels) {
  if (!operations || !channels) {
      return [];
  }

  let topicsDetails = [];

  operations.forEach((op) => {
      const operationId = op._meta?.id; // Extract operation ID
      const channelRef = op._json.channel?.['x-parser-unique-object-id']; // Reference to channel

      if (!operationId || !channelRef) {
          return;
      }

      // Find the corresponding channel by unique object ID
      const channel = channels.find(
          (ch) => ch._json['x-parser-unique-object-id'] === channelRef
      );

      if (!channel) {
          return;
      }

      topicsDetails.push({
          name: operationId.replace(/^handle/, ''), // Remove "handle" prefix
          topic: channel._json.address, // Channel address
      });
  });

  return topicsDetails;
}
