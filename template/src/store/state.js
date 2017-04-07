{{#flow}}// @flow
export type State = {
  message: string,
  date: Date
}
{{/flow}}

const message{{#flow}}: string{{/flow}} = window.__INITIAL_STATE__
const state{{#flow}}: State{{/flow}} = {
  message,
  date: new Date()
}

export default state
