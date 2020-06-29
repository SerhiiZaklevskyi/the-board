import styled from 'styled-components'

interface IStyledProps {
  name: any
}

const nameChecker = (name: string) => {
  const color = nameVariants.find((elem) => elem.name === name)
  return color && color.value
}

const nameVariants = [
  { name: 'Ui Design', value: 'green' },
  { name: 'Marketing', value: 'purple' },
  { name: 'Research', value: 'red' },
]

export const MarkView = styled.span<IStyledProps>`
  background: ${({ name }) => nameChecker(name)};
  padding: 7px 6px;
  border-radius: 6px;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
`
