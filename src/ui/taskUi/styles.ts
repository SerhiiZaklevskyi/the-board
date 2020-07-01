import styled from 'styled-components'

export const TaskView = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  position: relative;

  .headline {
    font-weight: ${({ title }) => title !== 'Live' && 'bold'};
    font-size: 1.1rem;
    text-decoration: ${({ title }) => title === 'Live' && 'line-through'};
    color: ${({ title }) => title === 'Live' && 'grey'};
    overflow: hidden;
  }

  .description {
    overflow: hidden;
  }

  .settings {
    position: absolute;
    top: 0;
    right: 1%;
  }

  .completed {
    display: flex;
    color: green;
    font-size: 1rem;
    align-items: center;
  }

  .completeIcon {
    width: 20%;
  }

  .delete {
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 3%;
    background: transparent;
  }
`
