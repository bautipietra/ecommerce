// Validate password
export default function isValidPassword(password: string) {
  if (password.length < 6 || password.length > 20) {
    return false
  }
  return true
}