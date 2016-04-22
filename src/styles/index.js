import {upToBig, upToMedium} from './media-queries'
const container = {
  maxWidth: 1000,
  width: '90%',
  margin: '0 auto',
  paddingBottom: 20,
}

const social = {
  background: 'linear-gradient(to right, rgba(245,243,231,1) 0%, rgba(232,227,190,1) 100%)',
  backgroundColor: '#ece8c3',
  boxShadow: '0px 14px 22px -6px rgba(0,0,0,0.38)',
  [upToBig]: {width: '90%'},
  [upToMedium]: {width: '85%'},
}

const socialDecor = {
  height: 6,
  backgroundColor: '#b9b489',
}

export {container, social, socialDecor}
