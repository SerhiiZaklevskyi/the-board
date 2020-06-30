import React from 'react'
import { Provider } from 'react-redux'
import ApplicationStore from './store'
import Wrapper from './components/wrapper/wrapper'
import GlobalStyles from './common/styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ToastContainer toastClassName='toast' />
      <Provider store={ApplicationStore}>
        <Wrapper />
      </Provider>
    </React.Fragment>
  )
}

export default App
