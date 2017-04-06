{{#flow}}// @flow
import type { State } from './state'
{{/flow}}
export const SET_MESSAGE = '__SET_MESSAGE__'

export default {
  [SET_MESSAGE] (state{{#flow}}: State{{/flow}}, message{{#flow}}: string{{/flow}}) {
    state.message = message
  }
}
