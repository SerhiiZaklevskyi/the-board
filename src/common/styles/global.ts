import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      font-family: 'Muli', sans-serif;
  }
  html{
    min-height:100%;
    position:relative;
}
body{
    height:100%;
    margin:0
}
#root {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    overflow:hidden;
}
  
`
