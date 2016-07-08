import path from 'path'
import fs from 'fs'

export function writeJsonArray(arrayNewItems, config, applyFilter = false) {
  const destFile = path.join(__dirname, config.destDirectoryFromHere, `data.json`)
  const allFileContent = arrayNewItems.map(item => {
    return applyFilter ? filterProperties(config.propertiesToFilter, item) : item
  })
  writeToFile(destFile, JSON.stringify(allFileContent))
}

export function writeJsonObject(newItem, config, applyFilter = false) {
  const destFile = path.join(__dirname, config.destDirectoryFromHere, `data.json`)
  const itemToCopy = applyFilter ? filterProperties(config.propertiesToFilter, newItem) : newItem
  writeToFile(destFile, JSON.stringify(itemToCopy))
}

function writeToFile(file, content) {
  fs.writeFile(file, content, err => {
    if (err) {
      throw new Error(`😱ERROR: could not write json file: ${file}\n->Error details: ${err}\n`)
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
