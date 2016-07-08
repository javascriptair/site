export default hijackConsole

function hijackConsole(ignoreLogs) {
  hijack('warn')
  hijack('error')

  function hijack(logger) {
    const original = console[logger]
    console[logger] = function hijackedConsole(...args) {
      const line = args.join(' ')
      const shouldIgnore = ignoreLogs.some(ignore => {
        if (typeof ignore === 'string') {
          return line.includes(ignore)
        } else {
          return ignore.test(line)
        }
      })
      if (!shouldIgnore) {
        return original(...args)
      }
      return undefined
    }
  }
}
