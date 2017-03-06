import speakeasy from 'speakeasy'
import {Meteor} from 'meteor/meteor'

export default async function (root, {code}, context) {
  const user = Meteor.users.findOne(context.userId)
  if (!user) throw new Error('User not found')

  const verified = speakeasy.totp.verify({ secret: user.services.twoFactor.base32, encoding: 'base32', token: code })

  if (!verified) {
    throw new Error('The code is not correct')
  }

  Meteor.users.update(user._id, {$set: {'services.twoFactor.enabled': true}})

  return Meteor.users.findOne(context.userId)
}
