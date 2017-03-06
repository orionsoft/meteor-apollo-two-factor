import {callMethod} from 'meteor/nicolaslopezj:apollo-accounts'
import hashPassword from './hashPassword'

export default async function (root, {username, email, password, plainPassword, code}, context) {
  if (!password && !plainPassword) {
    throw new Error('Password is required')
  }
  if (!password) {
    password = hashPassword(plainPassword)
  }

  const twoFactor = {
    user: email ? {email} : {username},
    password: password,
    code: code
  }
  return callMethod(context, 'login', {twoFactor})
}
