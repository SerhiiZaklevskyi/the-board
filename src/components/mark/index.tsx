import React from 'react'
import { MarkView } from './styles'

interface IMarkProps {
  name: string
}

const Mark = ({ name }: IMarkProps) => {
  return <MarkView name={name}>{name}</MarkView>
}

export default Mark
