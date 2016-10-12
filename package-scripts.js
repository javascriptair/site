/* eslint max-len:[2, 200] */
const commonWatch = '--watch ' + [ // eslint-disable-line prefer-template
  'src', 'sponsors', 'episodes', 'shared', 'generate',
].join(' --watch ')
const otherComponentsWatch = `${commonWatch} --watch other/components`
module.exports = {
  scripts: {
    build: {
      default: {
        description: 'Runs all the build scripts in parallel',
        script: 'nps -p eslint,build.home,build.episodes,build.guests,build.links-tips-picks,build.deals,build.css,build.contributors,createJson,build.screenshot.all',
      },
      home: 'babel-node generate/home',
      singleEpisode: {
        description: 'Pass this a directory for the episode to build just that episode page',
        script: 'babel-node ./scripts/build-episode',
      },
      episodes: 'babel-node ./scripts/build-episodes',
      screenshot: {
        all: {
          description: 'generates all the screenshot pages',
          script: 'babel-node ./scripts/screenshot-episodes',
        },
        single: {
          description: 'generates the given screenshot page',
          script: 'babel-node ./scripts/screenshot-episode',
        },
      },
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
      home: `nodemon ${commonWatch} --exec nps build.home`,
      episodes: `nodemon ${commonWatch} --exec nps build.episodes`,
      guests: `nodemon ${commonWatch} --exec nps build.guests`,
      linksTipsPicks: `nodemon ${commonWatch} --exec nps build.links-tips-picks`,
      deals: 'nodemon --watch src/pages/deals --watch data/deals --watch shared --watch generate/deals.js --exec nps build.deals',
      contributors: 'nodemon --watch src/pages/contributors --watch sponsors --watch src/components --watch data/contributors --watch shared --exec nps build.contributors',
      css: 'nodemon --watch resources/css --ext css --exec nps build.css',
      singleEpisode: {
        description: 'Pass an episode directory to build just that episode with a watch',
        script: `nodemon ${commonWatch} --exec nps build.singleEpisode`,
      },
      screenshot: {
        all: `nodemon ${commonWatch} --exec npm start build.screenshot.all`,
        single: `nodemon ${commonWatch} --exec npm start build.screenshot.single`,
      },
    },
    email: {
      default: {
        description: 'generates the email HTML for sending to people',
        script: 'babel-node other/generate-episode-email',
      },
      watch: `nodemon ${otherComponentsWatch} --watch other/generate-episode-email.js --exec nps email`,
    },
    description: 'babel-node other/generate-episode-description',
    eslint: 'eslint .',
    server: 'http-server',
    test: 'nps eslint',
    validate: 'nps build',
  },
}
