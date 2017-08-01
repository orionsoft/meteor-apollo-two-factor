import {Meteor} from 'meteor/meteor'

export default function () {
  const defaultSettings = {
    issuer: null,
    forceLogin: true
  }
  const userSettings = Meteor.settings.twoFactor || {}
  return {
    ...defaultSettings,
    ...userSettings
  }
}
