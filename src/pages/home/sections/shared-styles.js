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
})
