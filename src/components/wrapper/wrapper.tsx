import React, { Suspense } from 'react'
import WrapperView, { SuspenseComponent } from './styles'
import SearchPanel from '../search-panel'
import Main from '../main'
import CircularProgress from '@material-ui/core/CircularProgress'

const Fallback = () => (
  <SuspenseComponent>
    <CircularProgress />
  </SuspenseComponent>
)

const Wrapper = () => {
  return (
    <WrapperView>
      <Suspense fallback={<Fallback />}>
        <SearchPanel />
        <Main />
      </Suspense>
    </WrapperView>
  )
}

export default Wrapper
