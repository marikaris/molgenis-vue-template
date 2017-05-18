{{#flow}}// @flow
export type State = {
  message: string
}
{{/flow}}
export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const message{{#flow}}: string{{/flow}} = window.__INITIAL_STATE__
const state{{#flow}}: State{{/flow}} = {
  message
}

export default state
