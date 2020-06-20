import { render, cleanup } from '@redwoodjs/testing'

import SecretPage from './SecretPage'

describe('SecretPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<SecretPage />)
    }).not.toThrow()
  })
})
