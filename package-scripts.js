/* eslint max-len:[2, 200] */
const commonWatch = '--watch ' + [
  'src', 'sponsors', 'episodes', 'shared', 'generate',
].join(' --watch ')
module.exports = {
  scripts: {
    build: {
      default: {
        description: 'Runs all the build scripts in parallel',
        script: 'p-s -p eslint,build.home,build.episodes,build.guests,build.links-tips-picks,build.deals,build.css,build.contributors,createJson',
      },
      home: 'babel-node generate/home',
      singleEpisode: {
        description: 'Pass this a directory for the episode to build just that episode page',
        script: './scripts/build-episode.sh',
      },
      episodes: './scripts/build-episodes.sh',
      guests: 'rimraf guests && mkdir guests && babel-node generate/guests',
      linksTipsPicks: 'rimraf links-tips-picks && mkdir links-tips-picks && babel-node generate/links-tips-picks',
      deals: 'rimraf deals && mkdir deals && babel-node generate/deals',
      css: 'postcss -u postcss-import -u postcss-nested -u postcss-mixins -u autoprefixer -u cssnano resources/css/styles.css > styles.dist.css',
      contributors: 'rimraf contributors && mkdir contributors && babel-node generate/contributors',
    },
    deploy: {
      description: 'Deploys to surge.sh to javascriptair.com (requires a SURGE_TOKEN variable). This should only be run on Travis',
      script: './scripts/deploy.sh',
    },
    createShortUrl: {
      description: 'Create a short URL for a show',
      script: 'babel-node ./other/shorten-episode-url',
    },
    compressImage: {
      description: 'Compress an image for use on the site. You must pass two arguments: ./input.jpg ./output.png',
      script: 'babel-node ./other/compress-image',
    },
    getUpTweet: {
      description: `Get the tweet text for a show to indicate that it's available on the site.`,
      script: 'babel-node ./other/get-up-tweet',
    },
    podcastify: {
      description: 'Download YouTube audio for a show and optimize it for the audio podcast',
      script: 'babel-node ./other/podcastify-youtube-video',
    },
    addGuest: {
      description: `Get the guest's twitter profile picture to an episode and optimize it (using compressImage). This can also be used to eaisly add sponsors, contributors, and panelists`,
      script: 'babel-node ./other/add-guest',
    },
    addContributor: {
      description: 'Similar to add guest except this is specific to adding contributors',
      script: 'babel-node ./other/add-contributor',
    },
    createJson: {
      description: 'Create JSON data of episodes, panelists, host and sponsors',
      script: 'babel-node generate/json-files',
    },
    dev: {
      home: `nodemon ${commonWatch} --exec npm run start build.home -s`,
      guests: `nodemon ${commonWatch} --exec npm run start build.guests -s`,
      linksTipsPicks: `nodemon ${commonWatch} --exec npm run start build.links-tips-picks -s`,
      deals: 'nodemon --watch src/pages/deals --watch data/deals --watch shared --watch generate/deals.js --exec npm run start build.deals -s',
      contributors: 'nodemon --watch src/pages/contributors --watch sponsors --watch src/components --watch data/contributors --watch shared --exec npm run start build.contributors -s',
      css: 'nodemon --watch resources/css --ext css --exec npm run start build.css',
      singleEpisode: {
        description: 'Pass an episode directory to build just that episode with a watch',
        script: `nodemon ${commonWatch} --exec npm run start build.singleEpisode -s`,
      },
    },
    description: 'babel-node other/generate-episode-description',
    eslint: 'eslint .',
    server: 'http-server',
    test: 'npm run start eslint -s',
    validate: 'npm run start build -s',
  },
}
