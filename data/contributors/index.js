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
  {
    name: 'Vaibhav',
    twitter: 'da_vaibhav',
    contributions: 'Site PRs',
  },
  {
    name: 'Antti Kupila',
    twitter: 'akupila',
    contributions: 'Automation',
  },
  {
    name: 'Juan Pablo Osorio Ospina',
    twitter: 'jpoo90',
    contributions: 'Automation',
  },
  {
    name: 'Dalton Mitchell',
    twitter: 'daltonamitchell',
    contributions: 'Tweet Link',
  },
  {
    name: 'Yuta Hiroto',
    twitter: 'about_hiroppy',
    contributions: 'Site PRs',
  },
  {
    name: 'Erwan Datin',
    twitter: 'erwan_datin',
    contributions: 'Site PRs',
  },
  {
    name: 'Tim Arney',
    twitter: 'timarney',
    contributions: 'Site PRs',
  },
  {
    name: 'Tegan Churchill',
    twitter: 'teg4n_',
    contributions: 'Site PRs',
  },
  {
    name: 'Houssein Djirdeh',
    twitter: 'hdjirdeh',
    contributions: 'Site PRs',
  },
  {
    name: 'Jenn Turner',
    twitter: 'jennwrites',
    contributions: 'Newsletter',
  },
  {
    name: 'Sriram Thiagarajan',
    twitter: 'tsriram',
    contributions: 'Site PRs',
  },
  {
    name: 'Anth Winter',
    twitter: 'anthwinter',
    contributions: 'CSS Refactor',
  },
  {
    name: 'Kurtis Kemple',
    twitter: 'kurtiskemple',
    contributions: 'Site PRs',
  },
  {
    name: 'James McAllister',
    twitter: 'rb30',
    contributions: 'Site PRs',
  },
  {
    name: 'Marek Grzybek',
    twitter: 'feimosi',
    contributions: 'Site PRs',
  },
  {
    name: 'William He',
    twitter: 'supervegeter',
    contributions: 'Site PRs',
  },
  {
    name: 'Sam Verschueren',
    twitter: 'samverschueren',
    contributions: 'Site PRs',
  },
].map(c => ({
  imgSrc: `/data/contributors/${c.twitter}.png`,
  link: `https://twitter.com/${c.twitter}`,
  ...c,
}))

export default contributors
