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
        name: 'hangoutUrl',
        type: 'input',
        message: 'Hangout Url',
      },
      {
        name: 'description',
        type: 'input',
        message: 'Description',
      },
      {
        name: 'youTubeId',
        type: 'input',
        message: 'YouTube ID',
      },
    ]
  }

  function episodeActions() {
    const actions = []

    actions.push(addFile({
      path: 'episodes/{{date}}/index.js',
      templateFile: 'other/plop/episode/index-template.js.handlebars',
    }))

    // todo, look for guest images on the desktop and
    // move run the image converter on them and move
    // the result to the episode folder

    return actions
  }
}

