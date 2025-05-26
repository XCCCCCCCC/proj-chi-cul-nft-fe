import type { LoginParams } from '@api/types/user'
import request from '@utils/request/index'
enum Api {
  Login = '/v1/login/index',
}
const loginApi = (params: LoginParams) => {
  return request.post(Api.Login, params)
  // return axios.post('/v1/login/index', params)
}
export { loginApi }
