import {resolve} from 'path'
import renderComponentToFile from './renderComponentToFile'

import {flatten, uniqBy} from 'lodash'

import {episodes} from '../episodes'
import Guests from '../src/pages/guests'
import {sortPeople} from '<utils>/utils'

const guests = sortPeople(
  uniqBy(
    flatten(episodes.map(e => e.guests))
      .filter(g => g.name !== 'TBA'),
   'id'
  )
)

renderComponentToFile(
  <Guests guests={guests} />,
  resolve(__dirname, '../guests/index.html')
)
