import { render } from '@redwoodjs/testing/web'

import Summaries from './Summaries'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Summaries', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Summaries />)
    }).not.toThrow()
  })
})
