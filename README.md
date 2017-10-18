# Two Factor Auth For Meteor

```sh
meteor add orionsoft:meteor-apollo-two-factor
yarn add speakeasy qr-image
```

Only thing you have to do is set the options in meteor settings:

```json
{
  "twoFactor": {
    "issuer": "My App Name",
    "forceLogin": true
  }
}
```

To manually validate

```js
import {validateTwoFactor} from 'meteor/orionsoft:meteor-apollo-two-factor'

validateTwoFactor(user, token)
```
