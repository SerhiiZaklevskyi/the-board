import styled from 'styled-components'

export const StageView = styled.div`
  width: calc(100% / 5);
  font-size: 1rem;

  .header {
    background-color: ${({ color }) => color};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    font-size: 1.2rem;
  }

  .taskWrapper {
    position: relative;
    background-color: ${({ color }) => color};
    min-height: 85vh;
    overflow-y: auto;
  }

  .overlay {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
  }

  .stageName {
    width: 70%;
  }

  .addIcon {
    fill: white;
    margin-top: 1rem;
    margin-left: 45%;
  }
`
