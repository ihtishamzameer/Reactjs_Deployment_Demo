import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser, registerUser } from './authApi'

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      return await loginUser(credentials)
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

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: null,
    isAuthenticated: false,
    status: 'idle',
    error: null,
  },

  reducers: {
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.status = 'idle'
      state.error = null
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

      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
        state.error = null
      })

      .addCase(register.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || 'Registration failed'
      })
  },
})

export const { logout } = authSlice.actions

export default authSlice.reducer