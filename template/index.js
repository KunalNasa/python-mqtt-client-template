import { File } from '@asyncapi/generator-react-sdk'
import { TopicFunction } from '../components/TopicFunction'
import { Constructor } from '../components/Constructor'
import { DeclareClass } from '../components/DeclareClass'
import { InitializeBroker } from '../components/InitializeBroker'
import { FileHeader } from '../components/FileHeader'


export default function ({ asyncapi, params }) {
  return (
    <File name="client.py">
      <FileHeader />
      <InitializeBroker asyncapi={asyncapi} params={params} />
      <DeclareClass asyncapi={asyncapi}/>
      <Constructor/>
      <TopicFunction operations={asyncapi.operations()} channels={asyncapi.channels()} />
    </File>
  )
}

