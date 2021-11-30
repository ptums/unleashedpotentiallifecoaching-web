const fonts = {
  base: 'font-size: 1.875rem; line-height: 2.25rem',
  lg: 'font-size: 2.25rem; line-height: 2.5rem',
  lgwide: 'font-size: 2.25rem; line-height: 3rem',
  xl: 'font-size: 3rem; line-height: 1.3',
  xlwide: 'font-size: 3rem; line-height: 1.8',
  xlmed: 'font-size: 3rem; line-height: 1.3',
  xxl: 'font-size: 3.75rem; line-height: 1.1',
  xxlwide: 'font-size: 3.75rem; line-height: 1.3',
  xxxl: 'font-size: 4.5rem; line-height: 1',
  xxxxl: 'font-size: 6rem; line-height: 1',
  xxxxxl: 'font-size: 8rem; line-height: 1',
  xxxxxxl: 'font-size: 9rem; line-height: 1.1',
  lato: 'Lato, sans-serif',
  playFairDisplay: 'Playfair Display, serif',
}

const colors = {
  black: '#212121',
  white: '#fff',
  offWhite: '#fcfaff',
  gray: '#e9e9e9',
  darkGreen: '#31464B',
  standardGreen: '#506967',
  cream: '#EEE8D4',
  tan: '#D9CEB5',
  khaki: "#C7B79F",
  shadowNormal: '0px 4px 4px rgba(0,0,0, .4)',
  shadowLight: '0 .5rem 1rem rgba(0,0,0,.15)',
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