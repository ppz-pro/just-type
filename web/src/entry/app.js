import React, { useContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Fetch from '../common/fetch'
import Go from '../page/go'
import './index.styl'

export // for class cmp
const AppContext = React.createContext()

export // for functional cmp
function useAppContext() {
  return useContext(AppContext)
}

export default function() {
  const [lt, setLT] = useState()
  const [rt, setRT] = useState()

  return <AppContext.Provider value = {{
    fetch: Fetch({
      interceptResponse(items) {
        items.notyError = function() {
          if(!items.response.ok) {
            // noty.error(items.response.statusText)
            throw Error(`[http] ${options.method} ${url} 请求失败，已通知`)
          }
        }
        return items.response
      },
      interceptError(items) {
        const msg = '网络异常，请检查网络后刷新页面'
        // modal.show(msg)
        throw Error(msg)
      }
    })
  }}>
    <div className = 'jt-options'>
      {lt && lt || <div />}
      <div className = 'right'>
        <button>我的词库</button>
        <button>表白墙</button>
        <button>登录</button>
        <a href = 'https://github.com/ppz-pro/just-type' className = 'iconfont icon-github'></a>
      </div>
    </div>
    <Router>
      <Routes>
        {[
          ['/', Go]
        ].map(([path, Cmp], index) =>
          <Route
            key = {index}
            path = {path}
            element = {
              <Cmp setLT = {setLT} setRT = {setRT} />
            }
          />
        )}
      </Routes>
    </Router>
  </AppContext.Provider>
}