import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions'

checkNpmVersions({
  'graphql-loader': '1.1.x',
  'speakeasy': '2.0.x',
  'qr-image': '3.2.x'
}, 'orionsoft:stripe-graphql')
