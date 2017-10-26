/* global Package */

Package.describe({
  name: 'orionsoft:meteor-apollo-two-factor',
  version: '1.1.2',
  // Brief, one-line summary of the package.
  summary: 'Two Factor Auth for Meteor accounts in GraphQL',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nicolaslopezj/meteor-apollo-two-factor',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.2')

  api.use('ecmascript', 'server')
  api.use('nicolaslopezj:apollo-accounts@3.0.1', 'server')
  api.use('orionsoft:graphql-compiler@0.0.2', 'server')
  api.use('tmeasday:check-npm-versions@0.3.1', 'server')

  api.mainModule('index.js', 'server')
})

Package.onTest(function(api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('nicolaslopezj:apollo-accounts')
})
