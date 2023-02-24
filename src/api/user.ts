import type { Ilogin } from './types'
import { GET } from '~/services/http'

// 登录
export const login = (data: Ilogin) => GET('/user/login', data)
