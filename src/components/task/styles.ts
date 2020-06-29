import styled from 'styled-components'

export const TaskView = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  position: relative;

  .headline {
    font-weight: ${({ title }) => (title === 'Live' ? 'normal' : 'bold')};
    font-size: 1.1rem;
    max-width: 90%;
    text-decoration: ${({ title }) => (title === 'Live' ? 'line-through' : 'none')};
  }

  .description {
    max-width: 90%;
  }

  .settings {
    position: absolute;
    top: 10%;
    left: 90%;
  }
`
