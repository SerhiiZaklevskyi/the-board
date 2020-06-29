import React from 'react'
import { Provider } from 'react-redux'
import ApplicationStore from './store'
import Wrapper from './components/wrapper/wrapper'
import GlobalStyles from './common/styles/global'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Provider store={ApplicationStore}>
        <Wrapper />
      </Provider>
    </React.Fragment>
  )
}

export default App
