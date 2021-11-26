const fonts = {
  xs: 'font-size: 0.75rem; line-height: 1rem',
  sm: 'font-size: 0.875rem;; line-height: 1.25rem;',
  base: 'font-size: 12px; line-height: 1.5rem',
  md: 'font-size: 1.025rem; line-height: 1.5rem',
  lg: 'font-size: 1.125rem; line-height: 1.75rem',
  xl: 'font-size: 1.25rem; line-height: 1.75rem',
  xxl: 'font-size: 1.5rem; line-height: 2rem',
  xxxl: 'font-size: 1.875rem; line-height: 2.25rem',
  xxxxl: 'font-size: 2.25rem; line-height: 2.5rem',
  xxxxlwide: 'font-size: 2.25rem; line-height: 3rem',
  xxxxxl: 'font-size: 3rem; line-height: 1.3',
  xxxxxlwide: 'font-size: 3rem; line-height: 1.8',
  xxxxxlmed: 'font-size: 3rem; line-height: 1.3',
  xxxxxxl: 'font-size: 3.75rem; line-height: 1.1',
  xxxxxxlwide: 'font-size: 3.75rem; line-height: 1.3',
  xxxxxxxl: 'font-size: 4.5rem; line-height: 1',
  xxxxxxxxl: 'font-size: 6rem; line-height: 1',
  xxxxxxxxxl: 'font-size: 8rem; line-height: 1',
  excerpt: 'font-size: 2.1rem; line-height: 1.6',
  bold: 700,
  normal: 400,
  lato: 'Lato, sans-serif',
  playFairDisplay: 'Playfair Display, serif',
}

const colors = {
  black: '#212121',
  pureBlack: '#000000',
  white: '#fff',
  offWhite: '#fcfaff',
  whiteLowOpacity: 'rgba(255, 255, 255, 0.75)',  
  gray: '#e9e9e9',
  secondaryGray: '#dee2e6',
  thirdGray: '#ced4da',
  fourthGray: '#a9a9a9',
  fifthGray: '#444444',
  darkGreen: '#31464B',
  standardGreen: '#506967',
  cream: '#EEE8D4',
  tan: '#D9CEB5',
  khaki: "#C7B79F",
  shadowNormal: '0px 4px 4px rgba(0,0,0, .4)',
  shadowLight: '0 .5rem 1rem rgba(0,0,0,.15)',
  shadowDark: '0 0.33207px 2.21381px rgb(0 0 0 / 1%), 0 0.79801px 5.32008px rgb(0 0 0 / 3%)',
  extraLargeShadow: '0 0.33207px 2.21381px rgb(0 0 0 / 1%), 0 0.79801px 5.32008px rgb(0 0 0 / 3%), 0 1.50259px 10.0172px rgb(0 0 0 / 4%), 0 2.68036px 17.869px rgb(0 0 0 / 5%), 0 5.01331px 33.4221px rgb(0 0 0 / 6%), 0 12px 80px rgb(0 0 0 / 9%)'
}

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
}

const theme = {
  breakpoints,
  colors,
  fonts,
}

export default theme