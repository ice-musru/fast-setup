// eventBus.js
import mitt, { Emitter } from 'mitt'

type Events = {
  foo: string
  bar?: number
}

const emitter: Emitter<Events> = mitt<Events>()

export default emitter
