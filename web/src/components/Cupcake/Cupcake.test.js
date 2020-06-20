import { render } from '@redwoodjs/testing'

import Cupcake from './Cupcake'

describe('Cupcake', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Cupcake />)
    }).not.toThrow()
  })
})
