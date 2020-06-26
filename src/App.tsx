import React from 'react'
import { Provider } from 'react-redux'
import ApplicationStore from './store'
import Wrapper from './components/wrapper/wrapper'

const App = () => {
  return (
    <React.Fragment>
      <Provider store={ApplicationStore}>
        <Wrapper />
      </Provider>
    </React.Fragment>
  )
}

export default App
