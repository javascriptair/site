import shortenUrl from '../../shorten-url'

export default ({addFile}) => {
  return {
    description: 'Add an episode file',
    prompts: getPrompts(),
    actions: episodeActions,
  }

  function getPrompts() {
    return [
      {
        name: 'date',
        type: 'input',
        message: 'Date (eg. 2015-12-09)',
      },
      {
        name: 'title',
        type: 'input',
        message: 'Title',
      },
      {
        name: 'description',
        type: 'input',
        message: 'Description',
      },
      {
        name: 'hangoutId',
        type: 'input',
        message: 'Hangout ID',
      },
      {
        name: 'youTubeId',
        type: 'input',
        message: 'YouTube ID',
      },
      {
        name: 'shortUrl',
        type: 'input',
        message: 'What do you want the shortURL to be?',
      },
    ]
  }

  function episodeActions(data) {
    const actions = []
    Object.keys(data).forEach((d, k) => {
      // TODO: this doesn't seem to be working :-(
      data[k] = d
        .replace(/&amp;/g, '&')
        .replace(/(&#39;|&#x27;)/g, `'`)
        .replace(/(&quot;|”|“)/g, '"')
    })

    actions.push(addFile({
      path: 'episodes/{{date}}/index.js',
      templateFile: 'other/plop/episode/index-template.js.handlebars',
    }))

    actions.push(({shortUrl: alias, date}) => {
      return shortenUrl({alias, date})
    })

    // todo, look for guest images on the desktop and
    // move run the image converter on them and move
    // the result to the episode folder

    return actions
  }
}
