import React from 'react'
import { Wrapper, List, ListItem, Title } from './styled'

export default ({ failedLetters }) => (
  <Wrapper>
    <Title>Incorrect Attempts</Title>
    <List>
      {failedLetters.map(item => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </List>
  </Wrapper>
)


