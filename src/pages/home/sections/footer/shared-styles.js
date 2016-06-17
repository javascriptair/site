import {StyleSheet} from 'aphrodite'
const itemHeight = 23

export default StyleSheet.create({
  list: {
    textAlign: 'center',
    marginBottom: '30px',
    '@media only screen and (min-width : 490px)': {
      marginBottom: 0,
    },
  },
  item: {
    display: 'block',
    marginBottom: 10,
    '@media only screen and (min-width : 490px)': {
      display: 'inline-block',
    },
  },
  link: {
    color: 'white',
    marginRight: 15,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    height: itemHeight,
  },
})
