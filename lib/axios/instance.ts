import axios from 'axios'
import { getCookie } from 'cookies-next'
import instance from '.'

const Axios = {
  setRefreshToken: async () => {
    const refreshToken = getCookie('refresh-token')
    const res = await axios.post(
      'http://localhost:5000/api/auth/refresh',
      {},
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    )
    return res.status === 201
  },
}

export default Axios
