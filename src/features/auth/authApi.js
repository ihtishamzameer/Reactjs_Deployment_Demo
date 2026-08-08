// features/auth/authApi.js
import apiClient from '../../services/apiClient'

export const loginUser = async ({ username, password, rememberMe = false }) => {
  const { data } = await apiClient.post('/auth/login', {
    Username: username,
    Password: password,
    RememberMe: rememberMe
  })
  return data
}

export const registerUser = async ({ username, password }) => {
  const { data } = await apiClient.post('/auth/register', {
    Username: username,
    Password: password
  })
  return data
}

export const logoutUser = async () => {
  const { data } = await apiClient.post('/auth/logout')
  return data
}