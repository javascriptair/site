import generateEpisode from '../generate/episode'

const path = process.argv[2]
generateEpisode(path, () => {
  console.log(`done building ${path} 🎉`)
})
