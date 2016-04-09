import {StyleSheet} from 'aphrodite'

export default StyleSheet.create({
  panelist: {
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    marginBottom: 30,
    ':hover': {
      backgroundColor: '#1C1C1C',
    },
    ':hover .person__image': {
      opacity: 0.7,
    },
  },
  caption: {
    color: '#f0f0f0',
    lineHeight: '1.3em',
    '@media only screen and (min-width: 730px)': {
      textAlign: 'center',
    },
  },
  link: {
    color: '#f0f0f0',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecoration: 'underline',
  },
  personTwitter: {
    textAlign: 'left',
    fontStyle: 'italic',
    color: '#f8f8f8',
    textDecoration: 'underline',
  },
  personName: {color: '#f8f8f8', fontWeight: 'bold'},
})
