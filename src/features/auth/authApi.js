import apiClient from '../../services/apiClient'

export const loginUser = async ({ username, password }) => {
  const { data } = await apiClient.post('/api/auth/login', {
    Username: username,
    Password: password
  })
  return data
}