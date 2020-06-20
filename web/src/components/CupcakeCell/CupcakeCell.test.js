import { render, screen } from '@redwoodjs/testing'

import { Loading, Empty, Failure, Success } from './CupcakeCell'

describe('CupcakeCell', () => {
  it('Loading renders successfully', () => {
    render(<Loading />)
    // Use screen.debug() to see output.
    expect(screen.queryByText('Loading...')).toBeInTheDocument()
  })

  it('Empty renders successfully', () => {
    render(<Empty />)
    expect(screen.queryByText('Empty')).toBeInTheDocument()
  })

  it('Failure renders successfully', () => {
    render(<Failure error={{ message: 'Oh no!' }} />)
    expect(screen.queryByText('Error: Oh no!')).toBeInTheDocument()
  })

  it('Success renders successfully', () => {
    render(<Success userExample={{ cupcake: { objectKey: 'objectValue' } }} />)
    expect(
      screen.queryByText('{"cupcake":{"objectKey":"objectValue"}}')
    ).toBeInTheDocument()
  })
})
