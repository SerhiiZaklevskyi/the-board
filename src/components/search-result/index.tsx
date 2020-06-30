import React from 'react'
import { ResultsView } from './styles'

interface ISearchResultProps {
  headline?: string
  description?: string
  status: string
  mark?: string
}

const SearchResult = ({ headline, description, status, mark }: ISearchResultProps) => {
  return (
    <ResultsView>
      <span>{`- ${headline} на стадии ${status} ${mark && `с индетификатором ${mark}`}`}</span>
    </ResultsView>
  )
}

export default SearchResult
