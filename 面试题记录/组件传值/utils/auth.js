import Cookies from 'js-cookie'

const tokenKey = '_token'

export const getToken = website => {
  return Cookies.get(website + tokenKey)
}

export const setToken = (token, website) => {
  return Cookies.set(website + tokenKey, token)
}

export const removeToken = () => {
  Cookies.remove('smart_token')
  Cookies.remove('user-center_token')
  return true
}
