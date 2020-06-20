import { Link, routes } from '@redwoodjs/router'

const Cupcake = ({ cupcake }) => {
  return (
    <div key={cupcake.id}>
      <h2>
        <Link to={routes.cupcake({ id: cupcake.id })}>{cupcake.name}</Link>
      </h2>
      <p>{cupcake.description}</p>
      <img src={cupcake.photos[0].file.url} />
    </div>
  )
}

export default Cupcake
