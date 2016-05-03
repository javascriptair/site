import path from 'path'
import fs from 'fs'

export function writeJsonArray(arrayNewItems, config, applyFilter = false) {
  const DEST_JSON_FILE = path.join(__dirname, config.destDirectoryFromHere, `data.json`)
  const allFileContent = arrayNewItems.map(item => {
    return applyFilter ? filterProperties(config.propertiesToFilter, item) : item
  })
  writeToFile(DEST_JSON_FILE, JSON.stringify(allFileContent))
}

export function writeJsonObject(newItem, config, applyFilter = false) {
  const DEST_JSON_FILE = path.join(__dirname, config.destDirectoryFromHere, `data.json`)
  const itemToCopy = applyFilter ? filterProperties(config.propertiesToFilter, newItem) : newItem
  writeToFile(DEST_JSON_FILE, JSON.stringify(itemToCopy))
}

function writeToFile(file, content) {
  fs.writeFile(file, content, err => {
    if (err) {
      process.stdout.write(`😱ERROR: could not write json file: ${file}\n->Error details: ${err}\n`)
      process.exit(1)
    }
  })
}

function filterProperties(listProps, object) {
  const filtered = {}
  listProps.forEach(property => {
    filtered[property] = object[property]
  })
  return filtered
}
