type HttpResponse = UniNamespace.RequestSuccessCallbackResult & Partial<UniNamespace.GeneralCallbackResult>
const request = (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'HEAD' | 'OPTIONS' | 'TRACE',
  url: string,
  data?: string | object,
): Promise<HttpResponse> => {
  return new Promise((resolve, reject) => {
    uni.request({
      method,
      url: '', // 这里配置 baseUrl + url
      data,
      header: { 'Content-Type': 'application/json;charset=UTF-8', token: '', Accept: 'application/json' }, // 这里配置token
      dataType: 'json',
      success: (res: UniNamespace.RequestSuccessCallbackResult) => {
        resolve(res)
      },
      fail: (err: UniNamespace.GeneralCallbackResult) => {
        reject(err)
      },
    })
  })
}

const GET = (url: string, data?: string | object) => request('GET', url, data)
const POST = (url: string, data?: string | object) => request('POST', url, data)
const PUT = (url: string, data?: string | object) => request('PUT', url, data)
const DELETE = (url: string, data?: string | object) => request('DELETE', url, data)

export { request, GET, POST, PUT, DELETE }
