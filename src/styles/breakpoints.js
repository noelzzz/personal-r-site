//Objects that define the breakpoints that I can use for media queries as found on 
//https://jsramblings.com/how-to-use-media-queries-with-styled-components/


const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '615px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '1680px'
  }


  //desktop resolutions : 2560px

  
  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };
  