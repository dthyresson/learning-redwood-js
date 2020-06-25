import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'
import importAll from '@redwoodjs/api/importAll.macro'

import { getCurrentUser } from 'src/lib/auth.js'
import { db } from 'src/lib/db'

const schemas = importAll('api', 'graphql')
const services = importAll('api', 'services')

const wrapFunction = (fn) => {
  return fn
}

export const handler = wrapFunction(
  createGraphQLHandler({
    schema: makeMergedSchema({
      schemas,
      services: makeServices({ services }),
    }),
    db,
    async context({ event, context }) {
      const accessToken = event.headers?.authorization?.split(' ')?.[1]
      const jwt = context.currentUser
      const currentUser = await getCurrentUser(context, jwt, accessToken)

      return {
        ...context,
        accessToken,
        currentUser,
      }
    },
  })
)
