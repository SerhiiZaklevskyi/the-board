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
  }

  .taskWrapper {
    position: relative;
    background-color: ${({ color }) => color};
    min-height: 80vh;
    padding: 1rem;
  }

  .overlay {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .addIcon {
    margin-left: 48%;
  }
`
