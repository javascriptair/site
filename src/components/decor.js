import {StyleSheet, css} from 'aphrodite'

export default Decor

function Decor() {
  const {styles} = Decor
  return (
    <div className={css(styles.root)}>
      <span className={css(styles.part, styles.dark)}></span>
      <span className={css(styles.part, styles.medium)}></span>
      <span className={css(styles.part, styles.light)}></span>
    </div>
  )
}

Decor.styles = StyleSheet.create({
  root: {
    backgroundColor: 'tomato',
    display: 'flex',
    width: '100%',
  },
  part: {
    height: 15,
    flexGrow: 1,
  },
  dark: {backgroundColor: '#8e832b'},
  medium: {backgroundColor: '#baab38'},
  light: {backgroundColor: '#d4c33f'},
})
