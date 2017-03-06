import './checkNpm'
import {loadSchema} from 'graphql-loader'
import typeDefs from './schema'
import resolvers from './resolvers'
import './validateLogin'

loadSchema({typeDefs, resolvers})
