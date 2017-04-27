import {Accounts} from 'meteor/accounts-base'
import {Meteor} from 'meteor/meteor'
import speakeasy from 'speakeasy'

Accounts.validateLoginAttempt(function ({user, methodArguments}) {
  if (!user) return true
  if (!user.services.twoFactor) return true
  if (!user.services.twoFactor.enabled) return true
  const args = methodArguments[0]
  if (!args.password) return true

  const {error} = Accounts._checkPassword(user, args.password)
  if (error) {
    throw error
  }

  if (!args.twoFactor) {
    throw new Meteor.Error('need-two-factor', 'User needs two factor auth code')
  }
})

Accounts.registerLoginHandler('twofactor', function (options) {
  const {twoFactor} = options
  if (!twoFactor) return

  const user = Accounts._findUserByQuery(twoFactor.user)
  if (!user) throw new Meteor.Error(403, 'User not found')

  if (!user.services || !user.services.password || !user.services.password.bcrypt) {
    throw new Meteor.Error(403, 'User has no password set')
  }

  if (!user.services || !user.services.twoFactor || !user.services.twoFactor.enabled) {
    throw new Meteor.Error(403, 'User has no two factor enabled')
  }

  const {userId, error} = Accounts._checkPassword(user, twoFactor.password)

  if (error) {
    throw error
  }

  const verified = speakeasy.totp.verify({ secret: user.services.twoFactor.base32, encoding: 'base32', token: twoFactor.code })

  if (!verified) {
    throw new Meteor.Error(403, 'Two factor code is incorrect')
  }

  return {userId}
})
