import { render } from '@redwoodjs/testing/web'

import CreateChangelog from './CreateChangelog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateChangelog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateChangelog />)
    }).not.toThrow()
  })
})
