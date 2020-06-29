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

@media screen and (max-width: 940px) {
    html {
      font-size: 11px;
    }

  }
  
  
  @media screen and (max-width: 640px) {
    html {
      font-size: 7px;
    }
  }
  
  
  @media screen and (max-width: 410px) {
    html {
      font-size: 5.5px;
    }
  }
  
  @media screen and (min-width: 1800px) {
    html {
      font-size: 20px;
    }
  }
  
  @media screen and (min-width: 2100px) {
    html {
      font-size: 25px;
    }
  }
  
`
