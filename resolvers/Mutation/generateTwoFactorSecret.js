import speakeasy from 'speakeasy'
import {Meteor} from 'meteor/meteor'
import qr from 'qr-image'
import getSettings from '../../getSettings'

const settings = getSettings()

export default async function (root, params, context) {
  const user = Meteor.users.findOne(context.userId)
  if (!user) throw new Error('User not found')
  const {base32} = speakeasy.generateSecret()
  Meteor.users.update(user._id, {$set: {'services.twoFactor.base32': base32, 'services.twoFactor.enabled': false}})

  const issuer = encodeURIComponent(settings.issuer || Meteor.settings.twoFactorIssuer || 'Orionsoft')
  const email = user.emails[0].address

  const url = `otpauth://totp/${issuer}:${email}?secret=${base32}&issuer=${issuer}`

  const qrCode = qr.imageSync(url, {type: 'svg'})

  return {
    base32,
    qrCode
  }
}
