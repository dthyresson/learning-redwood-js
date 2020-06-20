import { render } from '@redwoodjs/testing'

import CupcakePage from './CupcakePage'

describe('CupcakePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CupcakePage />)
    }).not.toThrow()
  })
})
