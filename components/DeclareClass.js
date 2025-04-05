import { Text } from "@asyncapi/generator-react-sdk";

export function DeclareClass ({asyncapi}) {
    return (
        <Text newLines={2}>class {asyncapi.info().title().replaceAll(' ', '')}Client:</Text>
    )
}