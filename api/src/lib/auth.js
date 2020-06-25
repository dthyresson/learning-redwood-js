// Define what you want `currentUser` to return throughout your app. For example,
// to return a real user from your database, you could do something like:
//
//   export const getCurrentUser = async ({ email }) => {
//     return await db.user.findOne({ where: { email } })
//   }

import { AuthenticationError } from '@redwoodjs/api'
import { context } from '@redwoodjs/api/dist/globalContext'
import { AuthenticationClient } from 'auth0'

const auth0 = new AuthenticationClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
})

export const getCurrentUser = async (currentContext, jwt, accessToken) => {
  // try to find the user
  // let user = await db.user.findOne({
  //   where: {
  //     id: jwt.sub,
  //   },
  // })

  // try to find the user
  let user = currentContext?.currentUser

  if (!user?.picture && accessToken) {
    console.log('>> fetching getProfile')
    const auth0User = await auth0.getProfile(accessToken)

    // otherwise create a new user
    // user = await db.user.create({
    //   data: {
    //     id: auth0User.sub,
    //     email: auth0User.email,
    //     // you could add more values
    //   },
    // })

    currentContext.currentUser = { ...user, ...auth0User }

    return currentContext.currentUser
  }

  return jwt
}

// Use this function in your services to check that a user is logged in, and
// optionally raise an error if they're not.

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
