import './checkNpm'
import {loadSchema} from 'graphql-loader'
import typeDefs from './schema'
import resolvers from './resolvers'
import './validateLogin'
import validateTwoFactor from './validateTwoFactor'

loadSchema({typeDefs, resolvers})

export {
  validateTwoFactor
}
