import {checkNpmVersions} from 'meteor/tmeasday:check-npm-versions'

checkNpmVersions(
  {
    'graphql-loader': '1.2.x',
    speakeasy: '2.0.x',
    'qr-image': '3.2.x'
  },
  'orionsoft:meteor-apollo-two-factor'
)
