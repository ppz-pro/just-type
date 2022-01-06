export default function({
  baseUrl = '',
  interceptRequest,
  interceptResponse,
  interceptError
} = {}) {
  return {
    get(url, query, options = {}) {
      options.query = query
      return base(url, 'GET', options)
    },
    post: complex('POST'),
    put: complex('PUT'),
    delete: complex('DELETE')
  }

  function base(url, method, options = {}) {
    options.method = method

    url = baseUrl + url
    url += function() {
      const query = options.query
      if(!query) return ''
  
      let base = ''
      // 不支持复杂的数据结构，如果复杂应使用 post, put, ...
      for(let k in query)
        base += `&${k}=${query[k]}`
      delete options.query
      return '?' + base.slice(1)
    }()

    if(interceptRequest)
      interceptRequest({ url, options })
    try {
      let res = fetch(url, options)
      if(interceptResponse)
        res = res.then(response => interceptResponse({
          url, options, response
        }))
      return res
    } catch(error) {
      if(interceptError)
        interceptError({
          error, url, options, response
        })
      else
        throw error
    }
  }
  
  function complex(method) {
    return function(url, data, options) {
      if(data)
        options.body = JSON.stringify(data)
      return base(url, method, options)
    }
  }
}