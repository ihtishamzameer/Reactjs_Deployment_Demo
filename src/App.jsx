import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './features/auth/authSlice'

function App() {
  const dispatch = useDispatch()
  const { user, status, error } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(login({ username: 'test@test.com', password: 'test123' }))
  }, [dispatch])

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'failed') return <div>Error: {error}</div>

  return <div>{user ? JSON.stringify(user) : 'No user yet'}</div>
}

export default App