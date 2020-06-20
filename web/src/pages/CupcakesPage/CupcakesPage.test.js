import { render } from '@redwoodjs/testing'

import CupcakesPage from './CupcakesPage'

describe('CupcakesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CupcakesPage />)
    }).not.toThrow()
  })
})
