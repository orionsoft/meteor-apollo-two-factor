import {Meteor} from 'meteor/meteor'
import speakeasy from 'speakeasy'

export default function (user, token) {
  return speakeasy.totp.verify({ secret: user.services.twoFactor.base32, encoding: 'base32', token })
}
