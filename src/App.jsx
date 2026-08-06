import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Username: 'test@test.com', Password: 'test123' })
    })
      .then(res => res.json())
      .then(data => setMessage(JSON.stringify(data)))
      .catch(err => setMessage('Error: ' + err.message))
  }, [])

  return <div>{message}</div>
}

export default App