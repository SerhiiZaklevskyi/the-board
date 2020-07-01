import React, { useRef, useState, useEffect } from 'react'
import { SearchView } from './styles'
import SearchIcon from '@material-ui/icons/Search'
import { useSelector } from 'react-redux'
import { IStore } from '../../store'
import SearchResult from '../search-result'
import { ITaskReducerState } from '../../reducers/reducers'

const SearchPanel = () => {
  const inputRef: any = useRef(null)
  const resultWrapper: any = useRef<HTMLDivElement>()
  const [searchResult, setSearchResult] = useState<any>([])
  const [open, setOpen] = useState<boolean>(false)
  const { tasks } = useSelector((state: IStore) => state.content)

  const filter = () => {
    return tasks
      .map(({ headline, description, mark, status, ...track }) => ({
        ...track,
        headline,
        description,
        mark,
        status,
        label: `${headline} - ${description} - ${mark} - ${status}`,
      }))
      .filter(({ label }) => label.toLowerCase().includes(inputRef.current.value.toLowerCase()))
  }

  const showResult = (): void => {
    setOpen(true)
  }

  const onClose = (): void => {
    setOpen(false)
  }

  const handleOpen = () => {
    setSearchResult(filter())
    showResult()
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleOpen()
    }
  }

  const handleClickOutside = (event: MouseEvent): void => {
    const element: any = event.target
    if (resultWrapper.current && !resultWrapper.current.contains(element)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  })

  return (
    <SearchView show={open} onKeyPress={handleKeyPress}>
      <input type='text' name='search' ref={inputRef} />
      <SearchIcon className='searchIcon' color='primary' onClick={handleOpen} />
      <div className='searchResult' ref={resultWrapper}>
        {searchResult.length !== 0 ? (
          searchResult.map(({ _id, headline, description, mark, status }: ITaskReducerState) => (
            <SearchResult key={_id} headline={headline} description={description} mark={mark} status={status} />
          ))
        ) : (
          <span>Not found</span>
        )}
      </div>
    </SearchView>
  )
}

export default SearchPanel
