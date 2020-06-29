import React from 'react'
import { WrapperView } from './styles'
import SearchPanel from '../search-panel'
import Main from '../main'

const Wrapper = () => {
  return (
    <WrapperView>
      <SearchPanel />
      <Main />
    </WrapperView>
  )
}

export default Wrapper
