const contributors = [
  {
    name: 'Alex Booker',
    twitter: 'bookercodes',
    contributions: 'Site Redesign',
  },
  {
    name: 'Connor Elsea',
    twitter: 'Connorelsea_',
    contributions: 'Site Redesign',
  },
  {
    name: 'Adam Wolf',
    twitter: 'adamjwolf',
    contributions: 'SVG logo',
  },
  {
    name: 'Juan Soto',
    twitter: '_hooan',
    contributions: 'Site PRs',
  },
].map(c => {
  return {
    imgSrc: `/data/contributors/${c.twitter}.png`,
    link: `https://twitter.com/${c.twitter}`,
    ...c,
  }
})

export default contributors

