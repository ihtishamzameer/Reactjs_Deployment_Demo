import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser, registerUser, logoutUser } from './authApi'

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await loginUser(credentials)
      
      // Save tokens to localStorage
      if (response.accessToken) {
        localStorage.setItem('token', response.accessToken)
      }
      if (response.refreshToken) {
        localStorage.setItem('refreshToken', response.refreshToken)
      }
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.response?.data ||
        'Login failed'
      )
    }
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      return await registerUser(credentials)
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.response?.data ||
        'Registration failed'
      )
    }
  }
)

export const logoutUserThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await logoutUser()
      // Only clear tokens if the backend successfully invalidated the session
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      return response
    } catch (error) {
      // Do not silently pretend logout succeeded if it receives 401
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.response?.data ||
        'Logout failed'
      )
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: !!localStorage.getItem('token'),
    status: 'idle',
    error: null,
  },
  reducers: {
    // Fallback sync action if you ever need to forcefully clear state
    clearAuth: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.status = 'idle'
      state.error = null
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(login.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.isAuthenticated = false
        state.error = action.payload || 'Login failed'
      })

      // REGISTER
      .addCase(register.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(register.fulfilled, (state) => {
        state.status = 'succeeded'
        state.error = null
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || 'Registration failed'
      })

      // LOGOUT
      .addCase(logoutUserThunk.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.status = 'idle'
        state.user = null
        state.isAuthenticated = false
        state.error = null
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || 'Logout failed'
      })
  },
})

export const { clearAuth } = authSlice.actions
export default authSlice.reducer