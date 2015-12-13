import episode from './episode'

export default plop => {
  const helpers = {addFile}
  plop.setGenerator('episode', episode(helpers))

  function addFile(options) {
    return {
      type: 'add',
      abortOnFail: true,
      ...options,
    }
  }
}

