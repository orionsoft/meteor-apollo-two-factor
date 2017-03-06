export default function (user) {
  return user.services && user.services.twoFactor && user.services.twoFactor.enabled
}
