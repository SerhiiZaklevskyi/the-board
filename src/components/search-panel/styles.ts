import styled from 'styled-components'

interface IStylesProps {
  show: boolean
}

export const SearchView = styled.div<IStylesProps>`
  min-height: 50px;
  width: 100%;
  position: relative;

  & input {
    width: 100%;
    min-height: 50px;
    outline: none;
    padding-left: 1rem;
  }

  .searchIcon {
    position: absolute;
    top: 30%;
    right: 2%;
    cursor: pointer;
  }

  .searchResult {
    position: absolute;
    top: 115%;
    left: 10%;
    padding: 1.5rem;
    z-index: 100;
    width: 50%;
    background: white;
    min-height: 90px;
    border-radius: 10px;
    box-shadow: 10px 10px 8px;
    display: ${({ show }) => (show ? 'block' : 'none')};
  }
`
